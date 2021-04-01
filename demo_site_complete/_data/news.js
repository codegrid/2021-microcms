const fetch = require('node-fetch')
require('dotenv').config()

module.exports = async function getMicroCmsData() {
  const newsDataResponse = await fetch(process.env.CMS_URL, {
    headers: { "X-API-KEY": process.env.API_KEY },
  });
  const newsData = await newsDataResponse.json();
  return newsData.contents;
};
