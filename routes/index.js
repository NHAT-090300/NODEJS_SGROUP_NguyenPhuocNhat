var express = require('express');
var router = express.Router();

/* GET home page. */

  router.get( '/', (req, res) => {
      res.render('pages/dashboard');
  });
  router.get('/dashboardv2', (req, res) => {
    res.render('pages/dashboardv2');
  });
  router.get('/dashboardv3', (req, res) => {
    res.render('pages/dashboardv3');
  });
  router.get('/404', (req, res) => {
    res.render('pages/404');
  });
module.exports = router;
