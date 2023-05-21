const  express = require('express');
const app = express();
const port = 8080;
// const api_router = require('./api');

module.exports = class application {
    constructor() {
        this.server_config();
        this.apiconfig();
    }

    server_config() {
        app.listen(port, ()=>{
            console.log(` - - - - - - - - server is running! success!! http://localhost:${port}/`)
        });
        app.get('/api', function (req ,res) {
            res.send('helloworld')
        })
    }
    apiconfig(){

    }
}