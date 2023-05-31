const express =require('express');
const router =express.Router();
const controller = require ('./controller')
//define article page
router.get('/article',(req,res) => {
    controller.articlecontroler.allarticles(req,res)
})
//define sample page
router.get('/sample',(req,res) => {
    controller.samplecontroler.allsamples(req,res)
})

//define article by id page
router.get('/article/:id',(req,res) => {
    res.send(articledata)
})
//define sample by id page
router.get('/sample/:id',(req,res) => {
    res.send(sampledata)
})

module.exports = router;