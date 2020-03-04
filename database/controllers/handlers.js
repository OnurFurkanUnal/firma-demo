const jwt = require('jsonwebtoken')
var nodemailer = require('nodemailer');


const jwtKey = 'my_secret_keyasddsa!232&521645/&//45AwesdavcasddAQqqwsdas'
const jwtExpirySeconds = 86400

signIn = (req, res) => {

  return new Promise(function (resolve) {
    // Take id from json
    var id = req;

    // Create token and init expire time
    const token = jwt.sign({ id }, jwtKey, {
      algorithm: 'HS256',
      expiresIn: jwtExpirySeconds
    })
    // Send token
    resolve(res.cookie('token', token, { maxAge: jwtExpirySeconds * 1000, httpOnly: false,secure:false,domain:'.localhosta.com', path: '/'}));
  });
}

const welcome = (req, res) => {
  // it take cookie for every request
  return new Promise(function (resolve, reject) {
    const token = req.cookies.token

    // Validate Token
    if (!token) {
      reject(res.status(401).send('lütfen giriş yapın erişim süreniz doldu veya yetkiniz yok').end());
    } else {

      var payload
      try {
        // Validate Token and Grab id
        payload = jwt.verify(token, jwtKey)
        resolve(payload.id);
      } catch (e) {
        if (e instanceof jwt.JsonWebTokenError) {
          reject(res.status(401).send('lütfen giriş yapın erişim süreniz doldu veya yetkiniz yok').end());
        }
        reject(res.status(400).send('lütfen giriş yapın erişim süreniz doldu veya yetkiniz yok').end());
      }
    }
  });
}

const isValide = (req, res) => {
  // to Auto Log In
  return new Promise(function (resolve, reject) {

    const token = req.cookies.token

    // Validate Token
    if (!token) {
      return res.status(400).json('token yok knk').end()
    } else {

      var payload
      try {
        // Validate Token and Grab id
        payload = jwt.verify(token, jwtKey)
        resolve(payload.id);
      } catch (e) {
        if (e instanceof jwt.JsonWebTokenError) {
          reject(res.status(400).json('token yok knk').end());
        }
        reject(res.status(400).json('token yok knk').end());
      }
    }

  });

}

const logOut = function (req, res) {
  return new Promise(function (resolve, reject) {
    // to Log Out
    const token = req.cookies.token

    // Validate Token
    if (!token) {
      reject(res.status(400).json('Çıkış Yapılamadı Çünkü Kullanıcı Girişi Yapılmadı').end());
    } else {

      var payload
      try {
        // Validate Token and Grab id
        payload = jwt.verify(token, jwtKey)
        resolve(res.status(200).cookie('token', token, { maxAge: 0, httpOnly: false,secure:false,domain:'.localhosta.com', path: '/' }).json('Başarıyla Çıkış Yapıldı').end());
      } catch (e) {
        if (e instanceof jwt.JsonWebTokenError) {
          reject(Error(res.status(400).end()));
        }
        reject(Error(res.status(400).end()));
      }
    }
  });
}


module.exports = {
  signIn,
  welcome,
  isValide,
  logOut
}
