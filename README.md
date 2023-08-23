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

Let's test the endpoint `/scrape` by using cURL. Run the below cURL in your terminal to make sure the endpoint is working:

```bash
curl 'http://localhost:3000/scrape?url=https://www.g2.com/products/xcode/reviews'
```

This project guides you through a complete process of scraping G2 product reviews, parsing the data, and storing it in Firebase. Remember to replace placeholders with your own tokens, URLs, and paths.
