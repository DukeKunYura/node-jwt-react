const nodemailer = require('nodemailer');

class MailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.rambler.ru',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS
            }
        })
    }


    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: 'Активация аккаунта на ' + process.env.API_URL,
            html:
                `<div>
                    <h1>Для активации перейдите по ссылке</h1>
                    <a href="${link}">${link}</a>
                </div>`
        })

    }


}

module.exports = new MailService();