const nodemailer = require("nodemailer");

module.exports.email = async function email(to, subject,mail_body, mail_html){
    const transporter = await nodemailer.createTransport({
        host: "smtp.mail.ru",
        port: 465,
        secure:true,
        auth:{
            user: "rustambek0301@mail.ru",
            pass: "StfX82f9dqnF384etzu5",
        },
    });
return await transporter.sendMail({
    from: '"Bizning kompaniya" <rustambek0301@mail.ru>',
    to, 
    subject,
    text: mail_body,
    html: mail_html,
});

}
// (async  ()  =>{
//     let info = await email("rustambek01uz@yandex.ru","masdad","xcima","<h1>salomlar</h1>");
// console.log(info);

// })