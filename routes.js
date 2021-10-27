const Router = require('express').Router;
const router = new Router();


router.route('/skins')
    .get((req, res) => {
        res.json({ message: 'get' });
    })
    .post((req, res) => {
        res.json({ message: 'post'})
    });


module.exports = router;