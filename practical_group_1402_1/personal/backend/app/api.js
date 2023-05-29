const express =require('express');
const router =express.Router();
const articledata=require('./data/article');
const sampledata=require('./data/sample')
//define article page
router.get('/article',(req,res) => {
    res.send('article page')
})
//define sample page
router.get('/sample',(req,res) => {
    res.send('sample page')
})

//define article by id page
router.get('/article/:id',(req,res) => {
    res.send(articledata)
})
//define sample by page
router.get('/sample/:id',(req,res) => {
    res.send(sampledata)
})

module.exports = router;