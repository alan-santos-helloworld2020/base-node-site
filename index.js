const express = require('express');
const app = express();
const path = require('path');
const router = require('./router/router');
const port = process.env.PORT || 3000;
app.use(router);


app.listen(port, (err) => {

    if (err) {
        console.log(err.message);
        return;
    } else {
        console.log(`http://localhost:${port}`)

    }
});