const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
require('./db/db');
const controllers = require('./controllers/stuff');
router.use(bodyParser.urlencoded());
router.use(methodOverride('_method'));
router.use('/stuff', controllers)
router.listen(3000)