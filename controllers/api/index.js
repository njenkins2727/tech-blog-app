const router = require('express').Router();

const dashboardRoutes = require('./dashboardRoutes');
const userRoutes = require('./userRoutes');
router.use('/', dashboardRoutes);
router.use('/', userRoutes);

module.exports = router;