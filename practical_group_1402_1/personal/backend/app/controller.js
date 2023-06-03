const sampledata = require('./data/sample')
const articledata = require('./data/article')
const { response } = require('express')

class articlecontroler{

    allarticles(req,res) {

        res.json(articledata)
        
    }

    articlebyid(req,res){
        const url_article_id = req.params.id;
        const find_article_id= articledata.find(data_article => data_article.id == url_article_id)
        if(find_article_id){
            res.json(find_article_id)
        }
        else{
            res.status(404).send('not found')
        }
    }

}
class samplecontroler{

    allsamples(req,res) {

        res.json(sampledata)
        
    }

    samplebyid(req,res){
        // 
        const url_sample_id = req.params.id;
        const find_sample_id= sampledata.find(data_sample => data_sample.id == url_sample_id)
        if(find_sample_id){
            res.json(find_sample_id)
        }
        else{
            res.status(404).send('not found')
        }
    }

}

module.exports={articlecontroler:new articlecontroler , samplecontroler:new samplecontroler}