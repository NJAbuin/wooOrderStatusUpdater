const api = require("express").Router();
const axios = require("axios");
require("dotenv").config();

const { refreshZohoAccessToken } = require("../../utils/zoho");

api.get("/update_packaged_orders", async (req, res) => {
  const zohoAccessToken = await refreshZohoAccessToken();
  console.log(response);

  const config = {
    method: "put",
    url: `https://shop.netuniversecorp.com/wp-json/wc/v2/orders/${req.params.id}?consumer_key=${process.env.WOOCOMMERCE_CUSTOMER_KEY}&consumer_secret=${process.env.WOOCOMMERCE_CUSTOMER_SECRET}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: req.body,
  };
});

module.exports = api;
