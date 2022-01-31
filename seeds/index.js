const sequelize = require('../config/connection');

const userSeed = require('./userSeed');
const postSeed = require('./postSeed');
const commentSeed = require('./commentSeed');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await userSeed();
    await postSeed();
    await commentSeed();
    process.exit(0);
};

seedAll();