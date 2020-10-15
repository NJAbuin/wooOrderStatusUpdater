const axios = require("axios");

/**
 * Get sales order from zoho by ID and returns the packages associated with it.
 * @param {String} zohoAccessToken
 * @param {String} zohoOrderID
 * @returns {[]} Array of packages
 */
const fetchPackages = async (zohoAccessToken, zohoOrderID) => {
  let config = {
    method: "get",
    url: `https://inventory.zoho.com/api/v1/salesorders/${zohoOrderID}?organization_id=${process.env.ZOHO_ORGANIZATION_ID}`,
    headers: {
      Authorization: `Zoho-oauthtoken ${zohoAccessToken}`,
    },
  };
  const response = await axios(config);
  const packageList = response.data.salesorder.packages;

  return packageList;
};

module.exports = fetchPackages;
