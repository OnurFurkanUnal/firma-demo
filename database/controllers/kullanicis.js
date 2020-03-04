Yazar = require('../models/').Yazar;
Kullanici = require('../models/').Kullanici;
Kitap = require('../models/').Kitap;
Methods = require('./handlers')
ServiceMail = require('./mail.js')
nodemailer = require('nodemailer');


module.exports = {
  index(req, res) {
    //Kullanıcıyı onayla ve giriş yetkisi ver
    Kullanici.findAll({
      attributes: ['id', 'KullaniciAdi', 'Sifre', 'email'],
      where: { KullaniciAdi: req.params.KullaniciAdi, Sifre: req.params.Sifre },
      include: [
        { model: Yazar }
      ]

    })
      .then((kullanicis) => {
        //Kullanıcı giriş dogrulama işlemleri
        if (kullanicis[0].KullaniciAdi === req.params.KullaniciAdi && kullanicis[0].Sifre === req.params.Sifre) {
          //Token verne dogrulama için (güvenlik)

          const $kullaniciId = kullanicis[0].id
          return Methods.signIn($kullaniciId, res)
            .then((cookie) => {
              cookie
              res.status(200).json(kullanicis)
            })
        }
        else throw Error;
      })
      .catch(() => res.status(500).json('yanlış kullanici adi yada şifre').end());
  },

  isValid(req, res) {
    //Kullanıcıyı onayla ve giriş yetkisi ver
    Methods.isValide(req, res)
      .then((id) => {
        return id;
      })
      .then((id) => {
        return Kullanici.findAll({
          attributes: ['id', 'KullaniciAdi', 'email'],
          where: { id: id }
        })
      })
      .then((kullanicis) => {
        return res.status(200).json(kullanicis).end();
      })
      .catch((err) => err);

  },

  logOut(req, res) {
    Methods.logOut(req, res)
      .then((cevap) => cevap)
      .catch((err) => err)
  },

  create(req, res) {
    //Yeni Kullanıcı Kaydı Olusturma
    Kullanici.findAll({
      attributes: ['id', 'KullaniciAdi', 'Sifre', 'email'],
      where: { KullaniciAdi: req.body.KullaniciAdi },
      include: [
        { model: Yazar }
      ]

    })
      .then((kullanicis) => {
        //Dogrulama işlemleri
        var emailCheck = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (kullanicis[0] == null) {
          if (!/\s/.test(req.body.KullaniciAdi) && req.body.KullaniciAdi != "" && !/\s/.test(req.body.Sifre) && req.body.Sifre != "") {
            if (emailCheck.test(req.body.email) && req.body.email != "") {

              return kullanicis

            } else {
              throw Error(res.status(500).json('Emaili tekrar gözden geçirin').end());
            }
          } else {
            throw Error(res.status(500).json('Kullanıcı adı ve Şifresi boş olamaz ve boşluk içeremez').end());
          }
        } else {
          throw Error(res.status(500).json('Kullanıcı Mevcud lütfen yeni bir kullanıcı adı giriniz').end());
        }

      })
      .then(() => {
        return Kullanici.create(req.body, req.body.id = null)
      })
      .catch(() => {
        throw Error(res.status(500).json('Eksik Bilgi').end());
      })
      .then((newKullanici) => {
        return res.status(200).json(newKullanici).end();
      })
      .then(() => {
        return ServiceMail.sendMail(req.body.email)
      })
      .then((message) => {
        message
      }).catch((err) => {
        console.log(err.message);
      })
      .catch((err) => err);
  }

};