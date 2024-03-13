const router = require('express').Router();
const MenuController = require('../controllers/menu.controller')

router.get('/',MenuController.getMenu)
router.get('/details/:id',MenuController.getDetails)

module.exports = router