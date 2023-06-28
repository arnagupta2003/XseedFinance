const express = require('express');
const router = express.Router();

//Get Routes
router.get('/index', (req, res) => {
  res.render('index');
});

//Post Routes

//Put Routes

//Delete Routes

module.exports = router;
