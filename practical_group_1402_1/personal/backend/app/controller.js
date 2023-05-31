const sampledata = require('./data/sample')
const articledata = require('./data/article')
const { response } = require('express')

class articlecontroler{

    allarticles(req,res) {

        res.json(articledata)
        
    }

    articlebyid(req,res){

    }

}
class samplecontroler{

    allsamples(req,res) {

        res.json(sampledata)
        
    }

    samplebyid(req,res){
        
    }

}

module.exports={articlecontroler:new articlecontroler , samplecontroler:new samplecontroler}