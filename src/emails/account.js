const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = ''

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email,name) => {
    sgMail.send({
        to: email,
        from: 'rohit@gmail.com',
        subject: 'Thanks for joining!!',
        text: `Welcome!! ${name}. Share your experience!!`
    })
}

module.exports = {
    sendWelcomeEmail
}
