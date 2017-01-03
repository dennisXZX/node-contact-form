var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

// handle post request
router.post('/send', function(req, res, next) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'test@gmail.com',
            pass: "test"
        }
    });

    var mailOptions = {
        from: 'John Doe <John@gmail.com>',
        to: 'dennisboys@gmail.com',
        subject: 'Website Submission',
        text: 'You have a new submission with the following details... ' + req.body.message,
        html: '<p>You have a new submission with the following details... ' + req.body.message + '</p>'
    }

    transporter.sendMail(mailOptions, function(err, info){
        res.redirect('/success');   
    });
});

module.exports = router;
