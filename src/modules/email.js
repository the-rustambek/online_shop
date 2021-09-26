const nodemailer = require("nodemailer");

async function email(to,mail_body, mail_html){
    const transport = await nodemailer.createTransport({
        host: "smtp.yandex.ru",
        port: 465,
        secure:true,
        auth:{
            user: "rustambek01uz",
            pass: "931487733RMS",
        },
    });
return await trnasport.sendEmail({
    from: '"Bizning kompaniya" <foo@example.com>',
    to, subject,
    text: mail_body,
    html: mail_html,
});

}