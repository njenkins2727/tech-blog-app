const Post = require("../models/Post");

const postData = [
    {
        title: 'burritos better than taco',
        body: 'it is truly what the title says'
    },
    {
        title: 'MnM mcflurry better than oreo',
        body: 'hot take do you agree?'
    },
]
const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost