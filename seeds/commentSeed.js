const { Comment } = require('../models');

const commentData = [
    {
        comment: 'I see what you did there',
        user_id: 2,
        post_id: 1
    },
    {
        comment: 'I also see what you did there',
        user_id: 1,
        post_id: 2
    },
    {
        comment: 'We need an upvote button on this one',
        user_id: 3,
        post_id: 3
    },
    {
        comment: 'Nice',
        user_id: 2,
        post_id: 4
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;