const router = require('express').Router();
const MenuController = require('../controllers/menu.controller')

router.get('/',MenuController.getMenu)

module.exports = router