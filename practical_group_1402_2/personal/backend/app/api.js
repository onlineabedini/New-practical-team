const router = require('express').Router();

const conteroller = require('./conteroller')
    // تعریف مسیر ها
router.get('/article', (req, res) => {
    conteroller.article_controller.get_articles(req, res)
});

router.get('/article/:id', (req, res) => {
    conteroller.article_controller.get_articles_id(req, res)
})

router.get('/sample', (req, res) => {
    conteroller.sample_controller.get_samples(req, res)
})

router.get('/sample/:id', (req, res) => {
    conteroller.sample_controller.get_samples_id(req, res)
})


module.exports = router;