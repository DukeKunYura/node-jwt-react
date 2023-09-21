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

    // constructor() {
    //     this.transporter = nodemailer.createTransport({
    //         host: 'smtp.spaceweb.ru',
    //         port: 465,
    //         secure: true,
    //         auth: {
    //             user: process.env.EMAIL_GBP,
    //             pass: process.env.PASS_GBP
    //         }
    //     })
    // }

    // async sendActivationMail(to, link) {
    //     await this.transporter.sendMail({
    //         from: process.env.EMAIL_GBP,
    //         to: process.env.EMAIL,
    //         subject: 'Тест',
    //         html:
    //             `<div>
    //                 <h1>Письмо</h1>
    //             </div>`
    //     })
    // }

}

module.exports = new MailService();