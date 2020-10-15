const api = require("express").Router();
const axios = require("axios");
require("dotenv").config();

const { updateOrder } = require("../../utils/woocommerce");
const { refreshZohoAccessToken, fetchPackages } = require("../../utils/zoho");

api.get("/update_packaged_order/:zohoId/:wooId", async (req, res) => {
  try {
    const zohoAccessToken = await refreshZohoAccessToken();
    const packages = await fetchPackages(zohoAccessToken, req.params.zohoId);
    const response = await updateOrder(req.params.wooId, packages);
    console.log(response);
    res.send(response);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = api;
