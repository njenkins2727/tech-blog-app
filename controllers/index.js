const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api') //do i need to export api folder?
router.use('/', homeRoutes);
router.use('/', apiRoutes);

module.exports = router;