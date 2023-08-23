# G2-reviews-crawler

## Introduction

This code is an accompaniment for [How to Scrape G2 Product Reviews Using JavaScript](https://crawlbase.com/blog/scrape-g2-reviews-using-javascript/ "Crawlbase Blog") blog.

Welcome to the Crawlbase G2 Reviews Scraper project! This project showcases how to scrape G2 product reviews using Crawlbase, Firebase, ExpressJS, and Cheerio.

# Getting Started

## Tools Needed

1. [Crawlbase Crawling API](https://crawlbase.com/crawling-api-avoid-captchas-blocks/)
2. [ExpressJS](https://www.npmjs.com/package/express/)
3. [Cheerio](https://cheerio.js.org/docs/)
4. [Firebase](https://firebase.google.com/)

## Installation:

Ensure you have Node.js installed. Then, run the following command in your terminal to install the required packages:

```bash
npm i
```

## Setting Up Firebase:

Make sure you have a Firebase project set up. Obtain the service **account key** and replace path/to/serviceAccountKey.json with its path in `index.js`. Also, update the databaseURL with your Firebase URL.

## Scraping with Crawlbase:

We're using Crawlbase's Crawling API to get the HTML of the G2 product reviews page. Replace **USER_TOKEN** with your Crawlbase Normal request/tcp token.

## Running the Server:

To run the server, execute:

```bash
npm run dev
```

The server will start on port `3000`, and you can access the `/scrape` endpoint.

Let's test the endpoint `/scrape` by using cURL. Run the below cURL in your terminal to make sure the endpoint is working also make sure to encode the G2 `URL`: ```bash curl 'http://localhost:3000/scrape?url=https%3A%2F%2Fwww.g2.com%2Fproducts%2Fvisual-studio%2Freviews' ```

## Response:

```json
{
    "productName": "Visual Studio",
    "stars": "4.5",
    "totalReviews": "3,390 Visual Studio Reviews",
    "allReviews": [
        {
            "reviewerName": "Raj V.",
            "reviewText": "One of the best IDE which I have used recently",
            "stars": "4.5",
            "profileTitle": "Software Developer Trainee  Mid-Market(51-1000 emp.)",
            "reviewerAvatar": "https://images.g2crowd.com/uploads/avatar/image/1884669/thumb_square_7abff04b6c1ccfe5bdca095d6d40043b.jpeg",
            "profileLabels": [
                "Validated Reviewer",
                "Verified Current User",
                "Review source: G2 invite",
                "Incentivized Review"
            ],
            "reviewDate": "Jul 25, 2023",
            "reviewLink": "https://www.g2.com/survey_responses/visual-studio-review-8354937"
        },
        {
            "reviewerName": "Riken C.",
            "reviewText": "it is a very useful tool to develop any desktop or web application",
            "stars": "4.5",
            "profileTitle": "Sr. Software Developer Small-Business(50 or fewer emp.)",
            "reviewerAvatar": "https://images.g2crowd.com/uploads/avatar/image/1905898/thumb_square_c81c06d50cfdfb4343cd43e8e79f2a03.jpeg",
            "profileLabels": [
                "Validated Reviewer",
                "Verified Current User",
                "Review source: Organic"
            ],
            "reviewDate": "Jul 16, 2023",
            "reviewLink": "https://www.g2.com/survey_responses/visual-studio-review-8323921"
        },
        {
            "reviewerName": "Ali K A.",
            "reviewText": "Using Visual Studio since ",
            "stars": "5.0",
            "profileTitle": "Head Of IT Department Non-Profit Organization Management Small-Business(50 or fewer emp.)",
            "reviewerAvatar": "https://images.g2crowd.com/uploads/avatar/image/625995/thumb_square_b5ebbef4e960aaba994169c556855143.jpeg",
            "profileLabels": [
                "Validated Reviewer",
                "Verified Current User",
                "Review source: G2 invite",
                "Incentivized Review"
            ],
            "reviewDate": "Jun 29, 2023",
            "reviewLink": "https://www.g2.com/survey_responses/visual-studio-review-5469707"
        }
    ]
}
```

This project guides you through a complete process of scraping G2 product reviews, parsing the data, and storing it in Firebase. Remember to replace placeholders with your own tokens, URLs, and paths.
