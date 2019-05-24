const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'rohit.aanand1005@gmail.com',
    from: 'rohit@gmail.com',
    subject: 'Checking....',
    text: 'Hopefully mail sent!!!'
})
