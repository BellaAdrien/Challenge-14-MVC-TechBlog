const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const homeRoutes = require('../homeRoutes'); 
const profileRoutes = require('./profileRoutes');
//  const apiRoutes = require('./api');

//http://localhost:3001/api/users
router.use('/users', userRoutes);

//http://localhost:3001/api/projects
 router.use('/projects', projectRoutes);

router.use('/', homeRoutes);

 router.use('/profile', profileRoutes);

// router.use('/api', apiRoutes);

module.exports = router;
