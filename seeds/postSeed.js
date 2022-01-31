const { Post } = require('../models');

const postData = [
    {
        title: 'First POST... Kinda',
        message: 'Ive done a few POST routes in my days',
        'user_id': 1
    },
    {
        title: 'HelloWorld',
        message: 'Im on top of the world!',
        'user_id': 2
    },
    {
        title: 'Coffee',
        message: 'A great start to the day.',
        'user_id': 3
    },
    {
        title: 'Last POST... I hope',
        message: 'GET outta here',
        'user_id': 4
    },
    
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;