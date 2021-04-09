const fetch = require('node-fetch')
require('dotenv').config()

module.exports = async function getMicroCmsData() {
  const newsDataResponse = await fetch(process.env.ENDPOINT_URL, {
    headers: { "X-API-KEY": process.env.X_API_KEY },
  });
  const newsData = await newsDataResponse.json();
  return newsData.contents;
};
