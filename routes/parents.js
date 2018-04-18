var express = require('express');
var router = express.Router();
const fetch = require('isomorphic-fetch');

// do some checking here => check the default user profile
// ternary statement => MDN ternary
var toRender = 'main_parents';

/* GET users listing. */
router.get('/', function(req, res, next) {
  fetch('http://localhost:3000/api/parents')
            .then(
                    function (response) {
                        if (response.status !== 200) {
                            console.log('Looks like there was a problem. Status Code: ' +
                                    response.status);
                            return;
                        }

                        // Examine the text in the response
                        response.json().then(function (data) {
                            res.render(toRender, {
                                title: 'Parents section',
                                videosData: data.videosData
                            });
                        });
                    }
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });
});

module.exports = router;
