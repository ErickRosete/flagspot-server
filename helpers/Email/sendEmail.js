"use strict";
const nodemailer = require("nodemailer");

exports.sendEmail = async (emailInfo) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.zoho.com",
            port: 465,
            auth: {
                user:"admin@oscarrosete.com",
                pass:"LiaAshanti1!"
            }
        });

        // setup email data with unicode symbols
        const mailOptions = {
            from: '"Oscar Rosete 👻" <admin@oscarrosete.com>', // sender address
            to: emailInfo.to, // list of receivers
            subject: emailInfo.subject, // Subject line
            html: emailInfo.htmlContent // html body
        };
        console.log("dentro de sendEmail")
        console.log(mailOptions.subject)
        // send mail with defined transport object
        const info = await transporter.sendMail(mailOptions)

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}
