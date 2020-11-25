var express = require('express');
var router = express.Router();
import common from "../common/commonFunctions";
import userdetails from "../db/model/userModel";

/* GET users listing. */
router.get('/', function (req, res, next) {
  let { validation, message } = common.requiredFieldsValidation(req.params, ['_id']);
  if (validation) {
    
  } else {
    res.status(400).send(message);
  }
});

module.exports = router;
