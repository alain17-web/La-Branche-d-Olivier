const BookingController = {
    getBooking: (req,res) => {
        res.render('booking')
    },

    postBooking: (req,res) => {
        const {name,email,phone,date,time,nbr_pax} = req.body 
        console.log(name,email,phone,date,time,nbr_pax)
        res.send(`Bonjour ${name}, nous vous attendons le ${date} à ${time}h avec ${nbr_pax} personnes.`)
    }
}

module.exports = BookingController