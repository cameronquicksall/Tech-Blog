const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get("/", (req, res) => {
    Comment.findAll()
        .then((commentData) => res.json(commentData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    });

    router.post('/', withAuth, (req, res) => {
        if(req.session) {
            Comment.create(req.body)
            .then(commentData => res.json(commentData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
        }
    });

    module.exports = router;