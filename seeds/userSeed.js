const { User } = require('../models');

const userData = [
    {
        username: 'john',
        email: 'john@test.com',
        password: 'test'
    },
    {
        username: 'david',
        email: 'david@test.com',
        password: 'test'
    },
    {
        username: 'bird',
        email: 'bird@test.com',
        password: 'test'
    },
    {
        username: 'johnny',
        email: 'johnny@test.com',
        password: 'test'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;