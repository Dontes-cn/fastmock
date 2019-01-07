var express = require('express');
var router = express.Router();
import { ResponseFormat } from '../utils';
const db = require('../db/db.js');
/* GET users listing. */
router.get('/', async function(req, res) {
  const responseFormat = new ResponseFormat(res);
  db.query('select 1+1').then( resp => {
    responseFormat.jsonSuccess(resp);
  }).catch( err => {
    responseFormat.jsonError('查询失败');
  });
});

module.exports = router;