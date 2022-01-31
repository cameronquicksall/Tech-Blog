const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');



// Get all posts
router.get("/", (req, res) => {
    Post.findAll({
            attributes: ["id", "message", "title", "date"],
            order: [
                ["date", "DESC"]
            ],
            include: [{
                    model: User,
                    attributes: ["username"],
                },
                {
                    model: Comment,
                    attributes: ["id", "comment", "post_id", "user_id", "date"],
                    include: {
                        model: User,
                        attributes: ["username"],
                    },
                },
            ],
        })
        .then((postData) => res.json(postData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get a single post
router.get("/:id", (req, res) => {
    Post.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ["id", "message", "title", "date"],
            include: [{
                    model: User,
                    attributes: ["username"],
                },
                {
                    model: Comment,
                    attributes: ["id", "comment", "post_id", "user_id", "date"],
                    include: {
                        model: User,
                        attributes: ["username"],
                    },
                },
            ],
        })
        .then((postData) => {
            if (!postData) {
                res.status(404).json({
                    message: "No post found with this id"
                });
                return;
            }
            res.json(postData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Create a post
router.post("/", withAuth, (req, res) => {
    console.log("creating");
    Post.create(req.body)
        .then((postData) => res.json(postData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Update a post
router.put("/:id", withAuth, (req, res) => {
    Post.update({
            title: req.body.title,
            message: req.body.post_message,
        }, {
            where: {
                id: req.params.id,
            },
        })
        .then((postData) => {
            if (!postData) {
                res.status(404).json({
                    message: "No post found with this id"
                });
                return;
            }
            res.json(postData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//Delete a post
router.delete("/:id", withAuth, (req, res) => {
    Post.destroy({
            where: {
                id: req.params.id,
            },
        })
        .then((postData) => {
            if (!postData) {
                res.status(404).json({
                    message: "No post found with this id"
                });
                return;
            }
            res.json(postData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;