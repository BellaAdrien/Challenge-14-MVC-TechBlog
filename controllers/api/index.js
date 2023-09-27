const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const projectRoutes = require('./projectRoutes');
// const homeRoutes = require('./homeRoutes'); 
const apiRoutes = require('./apiRoutes');

//http://localhost:3001/api/users
router.use('/users', userRoutes);

//http://localhost:3001/api/projects
// router.use('/projects', projectRoutes);

// router.use('./homeRoutes', homeRoutes);

router.use('./apiRoutes', apiRoutes);

module.exports = router;
