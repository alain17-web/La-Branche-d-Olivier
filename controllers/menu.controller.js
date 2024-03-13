const dishes = require('../data/data.json')

const MenuController = {
    getMenu: (req,res) => {
        res.render('menu',{dishes})
    },

    getDetails: (req,res) => {
        const dishId = parseInt(req.params.id)

        const dish = dishes.find(dish => dish.id === dishId)
        if(!dish){
            return res.status(404).send('Plat non trouvé')
        } else {
            res.render('details', {dish})
        }
    }

}

module.exports = MenuController