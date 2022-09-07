const Post = require("../models/Post");

const postData = [
    {
        title: 'burritos better than taco',
        user_id: 1,
        body: 'it is truly what the title says'
    },
    {
        title: 'MnM mcflurry better than oreo',
        user_id: 2, 
        body: 'hot take do you agree?'
    },
]
const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost