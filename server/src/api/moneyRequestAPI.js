const express = require('express');
const router = express.Router();
const moneyTransferSRV = require('../services/moneyRequestSRV')
const middleware = require('../misc/middleware')

/**
 * make a new money request - only for child user
 * @route POST /moneyRequest/childRequest
 * @group moneyRequest api
 * @param {string} amount.body.required - request amount
 * @returns {object} 200 
 * @returns {Error}  default - Unexpected error
 */
router.post('/childRequest', middleware.isUserChild, function (req, res) {
    moneyTransferSRV.newRequest(req, res);
});

/**
 * get all money request - only for child user
 * @route GET /moneyRequest/getAll
 * @group moneyRequest api
 * @param {string} query.daysBack - the days back to get the money requests
 * @param {string} query.childID - only for parent request
 * @returns {object} 200 
 * @returns {Error}  default - Unexpected error
 */
router.get('/getAll', function (req, res) {
    moneyTransferSRV.allRequests(req, res);
});


module.exports = router;