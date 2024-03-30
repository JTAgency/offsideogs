// import axios from 'axios';

// const API_URL = 'https://api.gumroad.com/v2/products';
// const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

// const getProducts = async () => {
//   try {
//     const response = await axios.get(API_URL, {
//       params: {
//         'access_token': REACT_APP_API_KEY
//       }
//     });
//     return response.data;
//   } catch (error) {
//     // Handle errors
//     console.error('Error fetching data:', error);
//     throw error; // Rethrow the error to handle it in the component
//   }
// };

// export default getProducts;


// netlify/functions/getProducts.js

const axios = require('axios');

const API_URL = 'https://api.gumroad.com/v2/products';
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

exports.handler = async (event, context) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        'access_token': REACT_APP_API_KEY
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' })
    };
  }
};
