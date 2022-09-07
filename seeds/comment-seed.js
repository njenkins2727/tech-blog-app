const Comment = require("../models/Comment");

const commentData = [
    {
        user_id: 1,
        post_id: 1,
        body: 'strongly dissagree i hate messy burritos!'
    },
    {
        user_id: 2,
        post_id: 2,
        body: 'Yes! MnMs are so good, my favoruite.'
    }
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment