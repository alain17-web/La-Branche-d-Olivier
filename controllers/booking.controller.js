const BookingController = {
    getBooking: (req,res) => {
        res.render('booking')
    },

    postBooking: (req,res) => {
        const {name,email,phone,date,time,nbr_pax} = req.body

        const parsedDate = new Date(date);
        const formattedDate = parsedDate.toLocaleDateString('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        console.log(name,email,phone,date,time,nbr_pax)
        const responseMsg = (`<p>Bonjour ${name}, nous vous attendons le ${formattedDate} à ${time}h avec ${nbr_pax} personnes.</p>`)

        res.redirect('/?message=' + encodeURIComponent(responseMsg))
    }
}

module.exports = BookingController