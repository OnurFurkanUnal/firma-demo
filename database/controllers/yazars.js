Yazar = require('../models/').Yazar;
Kitap = require('../models/').Kitap;
Methods = require('./handlers')

module.exports = {

  index(req, res) {
    //Giriş yapdımı kontrol et ve kullanıcı id'si al tokenden.
    //Check user log status. If log in grab id from json token
    Methods.welcome(req, res)
      .then(($kullaniciId) => { return $kullaniciId })
      .then(($kullaniciId) => {
        //Kullanıcının tüm yazarlarını listele
        // List all authors of user
        return Yazar.findAll({
          attributes: ['id', 'YazarAdi', 'KullaniciId'],
          where: { KullaniciId: $kullaniciId },
          include: Kitap
        })
      })
      .then((yazars) => { return res.status(200).json(yazars).end() })
      .catch((error) => { throw Error(res.status(500).json(error).end()) })
      .catch((error) => error);
  },

  show(req, res) {
    //Giriş yapdımı kontrol et ve kullanıcı id'si al tokenden.
    //Check user log status. If log in grab id from json token
    var $kullaniciId;
    Methods.welcome(req, res)
      .then(($kullaniciIdd) => { return $kullaniciId = $kullaniciIdd })
      .then(($kullaniciId) => {
        return Yazar.findByPk(req.params.id, {
          where: {
            KullaniciId: $kullaniciId
          }, include: Kitap
        })
      })
      .then((yazar) => {
        //Yazar Dogrulama işlemleri
        //validation
        if (yazar == null || yazar.KullaniciId !== $kullaniciId) {
          throw Error(res.status(400).send('Veri yok Yada Veriye erişim yetkiniz yok.').end());
        }
        else {
          //Yazarı görüntüle
          //Show author
          return res.status(200).json(yazar).end();
        }
      })
      .catch((error) => error);
  },

  create(req, res) {
    //Giriş yapdımı kontrol et ve kullanıcı id'si al tokenden.
    //Check user log status. If log in grab id from json token
    Methods.welcome(req, res)
      .then(($kullaniciId) => { return $kullaniciId })
      .then(($kullaniciId) => {
        //Yeni Yazar Kaydı
        //New User record
        return Yazar.create(req.body, req.body.KullaniciId = $kullaniciId, req.body.id = null)
      })
      .then(() => { return res.status(200).json('başarılı bir şekilde kayıt edildi ').end() })
      .catch(() => { throw Error(res.status(500).json('veri yazılamadı lütfen doğru bilgiler giriniz').end()) })
      .catch((error) => error);
  },

  update(req, res) {
    //Giriş yapdımı kontrol et ve kullanıcı id'si al tokenden.
    //Check user log status. If log in grab id from json token
    var $kullaniciId;
    Methods.welcome(req, res)
      .then(($kullaniciIdd) => { return $kullaniciId = $kullaniciIdd })
      .then(($kullaniciId) => {
        //Yazarı bul
        //Find author
        return Yazar.findByPk(req.params.id, {
          where: {
            KullaniciId: $kullaniciId
          }, include: Kitap
        })
      })
      .catch(() => { throw Error(res.status(500).json('Yetkiniz olmayan Veya var olmayan bir yazar Id seçdiniz').end()); })
      .then((yazar) => {
        //Dogrulama işlemleri
        //validation
        if (yazar.id == req.params.id && yazar.KullaniciId == $kullaniciId && yazar != null) {
          if (req.body.YazarAdi) {
            //Yazarı update et
            //Update author
            return yazar;
          } else { throw Error(res.status(500).json('yanlış bilgi başlıkları girildi veya yazar adı boş bırakıldı').end()) }
        } else {
          throw Error(res.status(500).json('Yetkiniz olmayan Veya var olmayan bir yazar Id seçdiniz').end());
        }
      })
      .then((yazar) => {
        return Yazar.update({ id: req.params.id, YazarAdi: req.body.YazarAdi, KullaniciId: $kullaniciId }, {
          where: { id: yazar.id }
        })
      })
      .then(() => res.status(200).json('güncellendi').end())
      .catch(() => { throw Error(res.status(500).json('Lütfen size ait olan bir yazar seçiniz yazarları listeleyerek kontrol edebilirsiniz').end()); })
      .catch((err) => err);

  },

  delete(req, res) {
    //Giriş yapdımı kontrol et ve kullanıcı id'si al tokenden.
    //Check user log status. If log in grab id from json token
    var $kullaniciId
    Methods.welcome(req, res)
      .then(($kullaniciIdd) => { return $kullaniciId = $kullaniciIdd; })
      .then(($kullaniciIdd) => {
        //Yazarı bul
        //Find author
        return Yazar.findByPk(req.params.id, {
          where: {
            KullaniciId: $kullaniciId
          }, include: Kitap
        })
      })
      .then((yazar) => {
        //Dogrulama işlemleri
        //validation
        if (yazar.id == req.params.id && yazar.KullaniciId == $kullaniciId && yazar != null) {
          //Yazar silme
          //delete author
          return Yazar.destroy({
            where: {
              id: yazar.id,
              KullaniciId: $kullaniciId
            }
          })
        } else {
          throw Error(res.status(500).json('var olmayan yada yetkiniz olmayan bir veriyi silmeye çalışdınız').end());
        }
      })
      .then(() => res.status(200).json('başarıyla silindi').end())
      .catch(() => res.status(500).json('Hatalı işlem').end())
      .catch(() => res.status(500).json('var olmayan yada yetkiniz olmayan bir veriyi silmeye çalışdınız').end())
      .catch((err) => err);
  }
};