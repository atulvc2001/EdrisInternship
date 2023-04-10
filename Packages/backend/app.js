const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const axios = require('axios');
const cors = require('cors'); // import cors

const app = express();

app.use(cors()); // use cors middleware

app.use('/api', createProxyMiddleware({ 
  target: 'https://api.ng-erp.in/unicorn/dev',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/enquiries/UC-211217-0005'
  },
  headers: {
    'x-api-key': 'Onj86mVQAGXsbzvXEq487G1fM8wVe1G65mHsclL8'
  }
}));

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3000/api');
    const data = response.data;
    console.log(data); // log the data to the console
    res.send(data); // send a response to the client with the data
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data from API');
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});