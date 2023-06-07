
// coded by amir.a

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
    controller.articlecontroler.articlebyid(req,res)
})
//define sample by id page
router.get('/sample/:id',(req,res) => {
    controller.samplecontroler.samplebyid(req,res)
})

module.exports = router;