var nodemailer = require('nodemailer');


  const sendMail = function (email) {
    return new Promise(function (resolve, reject) {
      var transporter = nodemailer.createTransport({
        host: 'mx-kaydını-gir-yada-ayarı-mail saglayıcının apisine çek örnek "gmail" ',
        port: 465,
        secure: true,
        auth: {
          user: 'mailin',
          pass: 'sifren'
        }
      });

      var mailOptions = {
        from: '"info" <info@firmademo.com>',
        to: email,
        subject: 'Firma-Demo',
        text: 'Hoşgeldin'
      };

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