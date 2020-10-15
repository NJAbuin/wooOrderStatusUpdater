/**
 * Updates order carrier, tracking number and status in WooCommerce.
 * @param {String} orderID Woocommerce order id to edit
 * @param {[{}]} packageList Array of packages
 * @returns {{}} WooCommerce response
 */

const updateOrder = async (orderID, packageList) => {
  const config = {
    method: "put",
    url: `https://shop.netuniversecorp.com/wp-json/wc/v3/orders/${orderID}?consumer_key=${process.env.WOOCOMMERCE_CUSTOMER_KEY}&consumer_secret=${WOOCOMMERCE_CUSTOMER_SECRET}`,
    data: {
      status: "Order Shipped",
      "meta_data[9].value": "ups",
      "meta_data[10].value": "UPS",
      "meta_data[12].value": "ups",
    },
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log(packageList);
  //const response = await axios(config);
  //return response.data;
};

module.exports = updateOrder;
