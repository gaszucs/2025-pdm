require('dotenv').config();
const axios = require('axios');
const cors = require('cors');
const express = require('express');
const { default: PexelsClient } = require('../src/utils/PexelsClient');
const app = express();

app.use(cors())
const pexelsClient =  axios.create({
    baseURL: 'https://api.pexels.com/v1',
    headers: {
        Authorization: process.env.PEXELS_KEY
    }
})

//http://localhost:3000/api/fotos
//GET/search () => {}
app.get('/search', async(req, res) => {
    const query = req.query.query
    const result = await pexelsClient.get('/search', {
        params: {
            query: query,
            per_page: 15
        }
    })
    res.json(result.data)
})
const port = 3000
app.listen(port, () =>
  console.log(`Back End OK Porta:${port}`))
