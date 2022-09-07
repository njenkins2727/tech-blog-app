const seedComment = require('./comment-seed');
const seedPost = require('./post-seed');
const seedUsers= require('./user-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedComment();
  console.log('\n----- COMMENT SEEDED -----\n');
  await seedPost();
  console.log('\n----- POST SEEDED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  process.exit(0);
};

seedAll();
