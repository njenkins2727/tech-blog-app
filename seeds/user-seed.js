const User = require("../models/User")

const userData = [
    {
        username: 'Atrain68',
        password: 'password1'
    },
    {
        username: 'ghost_pig',
        password: 'password2'
    },
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;