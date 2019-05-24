const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name) => {
    sgMail.send({
        to: email,
        from: 'rohit@gmail.com',
        subject: 'Thanks for joining!!',
        text: `Welcome!! ${name}. Share your experience!!`
    })
}

const sendCancelationEmail = (email,name) => {
    sgMail.send({
        to: email,
        from: 'rohit@gmail.com',
        subject: 'Sorry to see you go!!',
        text: `Goodbye ${name}. I hope to see you back sometime soon!!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
