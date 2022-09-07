const Comment = require("../models/Comment");

const commentData = [
    {
        body: 'strongly dissagree i hate messy burritos!'
    },
    {
        body: 'Yes! MnMs are so good, my favoruite.'
    }
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment