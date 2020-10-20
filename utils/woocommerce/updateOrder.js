/**
 * Updates order carrier, tracking number and status in WooCommerce.
 * @param {String} orderID Woocommerce order id to edit
 * @param {[{}]} packageList Array of packages
 * @returns {{}} WooCommerce response
 */

const axios = require("axios");

const updateOrder = async (orderID, packageList) => {
  let data = {
    status: "order-shipped",
    meta_data: [
      { key: "_aftership_tracking_provider_name", value: "UPS" },
      {
        key: "_aftership_tracking_number",
        value: packageList[0].tracking_number,
      },
      { key: "_aftership_tracking_provider", value: "UPS" },
    ],
  };
  if (packageList.length > 1) {
    let note = "";
    for (let i = 1; i < packageList.length; i++) {
      note += packageList[i].tracking_number;
      note += " / ";
    }
    let noteData = {
      note: note,
      customer_note: true,
    };
    var config = {
      method: "post",
      url: `https://shop.netuniversecorp.com/wp-json/wc/v3/orders/${orderID}/notes?consumer_key=${process.env.WOOCOMMERCE_CUSTOMER_KEY}&consumer_secret=${process.env.WOOCOMMERCE_CUSTOMER_SECRET}`,
      data: JSON.stringify(noteData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios(config);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  var config = {
    method: "put",
    url: `https://shop.netuniversecorp.com/wp-json/wc/v3/orders/${orderID}?consumer_key=${process.env.WOOCOMMERCE_CUSTOMER_KEY}&consumer_secret=${process.env.WOOCOMMERCE_CUSTOMER_SECRET}`,
    data: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios(config);
  return response.data;
};

module.exports = updateOrder;

/*
 "meta_data[9].value": "ups",
      "meta_data[10].value": "UPS",
      "meta_data[12].value": packageList[0].tracking_number,
       */
