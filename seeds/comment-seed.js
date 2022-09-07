const Comment = require("../models/Comment");

const commentData = [
    {
        body: 'strongly dissagree i hate messy burritos!'
    },
    {
        body: 'Yes! MnMs are slepted on heavy.'
    }
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment