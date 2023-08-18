const express = require("express");
const cheerio = require("cheerio");
const { CrawlingAPI } = require("crawlbase");
const admin = require("firebase-admin");
const serviceAccount = require("./path/to/serviceAccountKey.json'"); // Replace with your path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-project-id.firebaseio.com", // Replace with your Firebase URL
});
// Using Crawlbase crawling API to crawl the HTML
const api = new CrawlingAPI({ token: "USER_TOKEN" }); // Replace it with you Crawlbase Normal token
// main app
const app = express();
const PORT = process.env.PORT || 3000;

function parsedDataFromHTML(html) {
  try {
    // Use Cheerio to load HTML
    const $ = cheerio.load(html),
      // Initialize productData object
      productData = {
        productName: "",
        stars: "",
        totalReviews: "",
        allReviews: [],
      };

    // Populate productData fields using Cheerio selectors
    productData["productName"] = $(".product-head [itemprop=name]").text();
    productData["stars"] = $("#products-dropdown .fw-semibold").first().text();
    productData["totalReviews"] = $(".filters-product h3").text();

    // Iterate through review elements
    $(".nested-ajax-loading > div.paper").each((_, element) => {
      // Extract data using Cheerio selectors
      const reviewerName = $(element).find("[itemprop=author]").text(),
        stars = $(element).find("[itemprop='ratingValue']").attr("content"),
        reviewText = $(element)
          .find(".pjax")
          .text()
          .replace(/[^a-zA-Z ]/g, ""),
        reviewerAvatar =
          $(element)
            .find(".avatar [ue=deferred-image]")
            .attr("data-deferred-image-src") || "",
        reviewLink = $(element).find(".pjax").attr("href"),
        profileTitle = $(element)
          .find(".mt-4th")
          .map((_, label) => $(label).text())
          .get(),
        profileLabels = $(element)
          .find("[ue=tooltip]")
          .map((_, label) => $(label).text())
          .get(),
        reviewDate = $(element).find(".x-current-review-date").text();

      // Populate reviewData object and push to allReviews array
      productData["allReviews"].push({
        reviewerName,
        reviewText,
        stars,
        profileTitle: profileTitle.length ? profileTitle.join(" ") : "",
        reviewerAvatar,
        profileLabels,
        reviewDate,
        reviewLink,
      });
    });
    return productData;
  } catch (error) {
    return error;
  }
}

app.get("/scrape", (req, res) => {
  api
    .get(req.query.url)
    .then(async (response) => {
      const parsedData = parsedDataFromHTML(response.body);
      const databaseRef = admin.database().ref(`${parsedData["productName"]}/`); // Replace with the path where you want to save the data

      databaseRef
        .push(parsedData)
        .then(() => {
          return res.status(200).json(parsedData);
        })
        .catch((error) => {
          res.status(500).send("Error saving data: " + error.message);
        });
    })
    .catch((error) => {
      console.log(error, "ERORR");
      return res.status(500).send({ status: "Failed", msg: "Data not Saved" });
    });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
