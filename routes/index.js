var express = require('express');
var router = express.Router();

// do some checking here => check the default user profile
// ternary statement => MDN ternary
var toRender = 'home';

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render(toRender, {
                                title: 'Home',
                                mainPage: true,

                            });
});

module.exports = router;
