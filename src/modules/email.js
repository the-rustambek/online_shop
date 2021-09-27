const nodemailer = require("nodemailer");

module.exports.email = async function email(to, subject,mail_body, mail_html){
    const transporter = await nodemailer.createTransport({
        host: "smtp.yandex.ru",
        port: 465,
        secure:true,
        auth:{
            user: "rustambek01uz@yandex.ru",
            pass: "gjqlfjjsmssotjnz",
        },
    });
return await transporter.sendMail({
    from: '"Bizning kompaniya" <rustambek01uz>',
    to, 
    subject,
    text: mail_body,
    html: mail_html,
});

}