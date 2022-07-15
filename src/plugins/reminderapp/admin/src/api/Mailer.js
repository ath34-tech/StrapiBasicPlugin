/*
    Video: https://www.youtube.com/watch?v=Va9UKGs1bwI
    Don't forget to disable less secure app from Gmail: https://myaccount.google.com/lesssecureapps TODO:
*/


const nodemailer = require('nodemailer');
const log = console.log;

// Step 1
const mail='YOUR EMAIL'
const mailTo='TO WHAT U WANNA SEND'
const password='PASSWORD'
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:mail, // TODO: your gmail account
        pass: password // TODO: your gmail password
    }
});

// Step 2
let mailOptions = {
    from: mail, // TODO: email sender
    to: mailTo, // TODO: email receiver
    subject: 'Reminder added',
    text: 'reminder'
};

// Step 3
export default function SendingMail(){
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs');
    }
    return log('Email sent!!!');
});
}