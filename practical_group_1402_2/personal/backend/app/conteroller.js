const articles = require('./data/article')
const samples = require('./data/sample')

class article_controller {

    get_articles(req, res) {
        res.json(articles)

    }

    get_articles_id(req, res) {
        const url_id = req.params.id;
        const article_id = articles.find(x_article => x_article.id == url_id);
        if (article_id) {
            res.json(article_id);
        } else {
            res.status(404).send('not found')

        }

    }


}



class sample_controller {

    get_samples(req, res) {
        res.json(samples)

    }

    get_samples_id(req, res) {
        const id = req.params.id;
        for (let sample of samples) {
            if (sample.id == id) {
                return res.json(sample)

            }
        }
        res.json('not found')
    }
}

module.exports = {
    article_controller: new article_controller,
    sample_controller: new sample_controller
}