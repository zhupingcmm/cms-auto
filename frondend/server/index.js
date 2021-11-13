const express = require('express');

const app = express();

app.use(express.static('../dist'))

app.listen(3001, () => {
    console.log('server is running on http://localhost:3001')
})