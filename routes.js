const Router = require('express').Router;
const router = new Router();


router.route('/skins')
    .get((req, res) => {
        res.json({ message: 'get' });
    })
    .post((req, res) => {
        res.json({ message: 'post'})
    });

router.route('/hero/:name')
    .get((req, res) => {
        const img = `${__dirname}/images/${req.params.name}.jpg`;
        res.sendFile(img);
    });


module.exports = router;