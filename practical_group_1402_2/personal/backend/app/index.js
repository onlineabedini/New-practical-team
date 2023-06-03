const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;
const api_router = require('./api');

module.exports = class application {
    constructor() {
        this.server_config()
        this.cors_config()
        this.api_config()



    }


    server_config() {
        app.listen(port, () => {
            console.log(` - - - - - - - - server is running! success!! http://localhost:${port}/`)
        });
        app.get('/api', function(req, res) {
            res.send('helloworld')
        })
    }

    cors_config() {
        app.use(cors())
    }

    api_config() {
        app.use('/api', api_router);
    }
}