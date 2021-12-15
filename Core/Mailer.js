const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAILUSER,
        pass: process.env.GMAILPASS
    }
})

module.exports = class Mailer {
    constructor(){
        
    }

    /**
     * @param {Object} data
     * @param {String} data.to
     * @param {String} data.subject
     * @param {String} data.html 
     * @returns {Promise}
     */
    static async SendMail({to, subject, html}){
        return new Promise(async (resolve, reject) => {
            let from = process.env.GMAILUSER
            resolve(await transporter.sendMail({to, subject, html, from}))
        })
    }
}