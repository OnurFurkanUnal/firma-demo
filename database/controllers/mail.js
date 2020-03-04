var nodemailer = require('nodemailer');


  const sendMail = function (email) {
    return new Promise(function (resolve, reject) {
      var transporter = nodemailer.createTransport({
        //mx record or mail provider api
        host: 'mx-kaydını-gir-yada-ayarı-mail saglayıcının apisine çek örnek "gmail" ',
        port: 465,
        secure: true,
        auth: {
          user: 'yourmail',
          pass: 'yourpassword'
        }
      });

      var mailOptions = {
        from: '"info" <info@firmademo.com>',
        to: email,
        subject: 'Firma-Demo',
        text: 'Hoşgeldin'
      };
       //Mail Gönder
       //Send Mail
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          reject(Error("Mail Gönderilemedi"));
        } else {
         resolve(console.log('Email sent: ' + info.response));
        }
      });

    });
  }
 module.exports = {
 sendMail
}