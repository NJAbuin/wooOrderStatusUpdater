const axios = require("axios");

/**
 * Uses refresh token to get a new access token
 * @returns {string} Refreshed access token
 */
const refreshZohoAccessToken = async () => {
  const response = await axios.post(
    `https://accounts.zoho.com/oauth/v2/token?refresh_token=${process.env.ZOHO_REFRESH_TOKEN}&client_id=${process.env.ZOHO_CLIENT_ID}&client_secret=${process.env.ZOHO_CLIENT_SECRET}&grant_type=refresh_token`
  );
  accessToken = response.data.access_token;
  return accessToken;
};

module.exports = refreshZohoAccessToken;
