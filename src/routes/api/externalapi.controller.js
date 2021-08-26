const router = require("express").Router();
const apiResponse = require("../../helpers/responseSender.helper");

const ExternalApiServices = require('../../services/externalapi.service');

router.get("/", async (req, res) => {

    const response = await ExternalApiServices.getData();
    return apiResponse.sendSuccessResponse(res, response, 'Records Found');
});

module.exports = router;
