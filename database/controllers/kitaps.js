Kitap = require('../models/').Kitap;
Yazar = require('../models/').Yazar;
const { QueryTypes } = require('sequelize');

module.exports = {
  index(req, res) {
    //Giriş yapdımı kontrol et ve kullanıcı id'si al tokenden.
    Methods.welcome(req, res)
      .then(($kullaniciId) => {
        //Kullanıcının tüm kitaplarını listele
        return Kitap.sequelize.query(' SELECT "Kitaps"."id", "Kitaps"."KitapAdi", "Kitaps"."YazarId", "Kitaps"."createdAt", "Kitaps"."updatedAt" FROM "Kitaps" INNER JOIN "Yazars" ON "Kitaps"."YazarId"="Yazars"."id" INNER JOIN "Kullanicis" ON "Yazars"."KullaniciId"="Kullanicis"."id"  WHERE "Kullanicis"."id" =' + $kullaniciId,
          { type: QueryTypes.SELECT, attributes: ['id', 'KitapAdi', 'YazarId'], })
      })
      .then((kitaps) => res.status(200).json(kitaps).end())
      .catch(() => res.status(500).json('Tekrardan giriş yapınız.').end());
  },

  show(req, res) {
    //Giriş yapdımı kontrol et ve kullanıcı id'si al tokenden.
    Methods.welcome(req, res)
      .then(($kullaniciId) => {
        //Kitabı bul
        return Kitap.sequelize.query(' SELECT "Kitaps"."id", "Kitaps"."KitapAdi", "Kitaps"."YazarId", "Kitaps"."createdAt", "Kitaps"."updatedAt" FROM "Kitaps" INNER JOIN "Yazars" ON "Kitaps"."YazarId"="Yazars"."id" INNER JOIN "Kullanicis" ON "Yazars"."KullaniciId"="Kullanicis"."id" WHERE "Kullanicis"."id" = ' + $kullaniciId + '  AND "Kitaps"."id"=' + req.params.id,
          { type: QueryTypes.SELECT })
      })
      .then((kitap) => {
        //Dogrulama işlemleri
        if (kitap[0].id !== null) {
          return res.status(200).json(kitap).end();
        }
        else throw Error(res.status(500).json('var olmayan yada yetkiniz olmayan bir kitabı görüntülemek istediniz').end());
      })
      .catch(() => { res.status(500).json('var olmayan yada yetkiniz olmayan bir kitabı görüntülemek istediniz').end() })
      .catch((err) => err);
  },

  create(req, res) {
    //Giriş yapdımı kontrol et ve kullanıcı id'si al tokenden.
    var $kullaniciId;
    Methods.welcome(req, res)
      .then(($kullaniciIdd) => {
        $kullaniciId = $kullaniciIdd;
        //Kitabın yazarını bul
        return Yazar.findByPk(req.body.YazarId, {
          where: {
            KullaniciId: $kullaniciId
          }
        })
      })
      .then((yazar) => {
        //Dogrulama işlemleri
        if (yazar == null || yazar.KullaniciId !== $kullaniciId) {
          throw Error(res.status(400).send('Lütfen gecerli bir yazar seciniz.').end());
        }
        else if (!req.body.KitapAdi || req.body.KitapAdi == null || req.body.YazarId == null || !req.body.YazarId) {
          throw Error(res.status(500).json('yanlış bilgi başlıkları girildi. Veya Kitap Adı yada YazarId Boş Girildi.').end())
        }
        else {
          //Yeni Kitabı Kaydet
          return yazar;
        }
      })
      .then((yazar) => { return Kitap.create(req.body, req.body.YazarId = yazar.id, req.body.id = null) })
      .catch(() => { res.status(500).json('Hata.').end() })
      .then(() => { return res.status(200).json('Kitap Başarlı Bir Şekilde Kaydedildi.').end() })
      .catch((err) => err);
  },

  update(req, res) {
    //Giriş yapdımı kontrol et ve kullanıcı id'si al tokenden.
    var $kullaniciId;
    var $yazarid;
    Methods.welcome(req, res)
      .then(($kullaniciIdd) => {
        return $kullaniciId = $kullaniciIdd;
      })
      .then(() => {
        //Kitap bul
        return Kitap.findByPk(req.params.id)
      })
      .then((kitap) => {
        if(kitap){
       return $yazarid = kitap.YazarId;
        }
        else{
          throw Error(res.status(400).send('Yetkiniz olmayan Yada Var olmayan bir kitaba erişmeye çalışdınız.').end())
        }
       })
       .then(() => {
        //Yazarını bul
       return Yazar.findByPk($yazarid, {
          where: {
            KullaniciId: $kullaniciId
          }
        })
      })
      .then((yazar) => {
        //Dogrulama işlemleri
        if (yazar.id == null) {
          throw Error(res.status(400).send('Lütfen bilgileri doğru giriniz.').end())
        }
        else if (yazar.KullaniciId !== $kullaniciId) {
          throw Error(res.status(400).send('Yetkiniz olmayan Yada Var olmayan bir kitaba erişmeye çalışdınız.').end())
        }
        else if (!req.body.KitapAdi) {
          throw Error(res.status(500).json('yanlış bilgi başlıkları girildi. Veya Kitap Adı Boş Girildi.').end())
        }
        else {
          //Kitap güncelle
          return yazar;
        }

      })
      .then((yazar) => { return Kitap.update({ id: req.params.id, YazarId: yazar.id, KitapAdi: req.body.KitapAdi }, { where: { id: req.params.id } }) })
      .then(() => { return res.status(200).json('Başarıyla güncellendi').end() })
      .catch(() => { throw Error(res.status(500).json('kitap güncelleme hatası').end()) })
      .catch((error) => error);

  },

  delete(req, res) {
    //Giriş yapdımı kontrol et ve kullanıcı id'si al tokenden.
    var $kullaniciId;
    var $yazarid;
    Methods.welcome(req, res)
      .then(($kullaniciIdd) => {
        $kullaniciId = $kullaniciIdd;
        //Kitap bul
        return Kitap.findByPk(req.params.id)
      })
      .then((kitap) => {
        $yazarid = kitap.YazarId
        //Kitabın yazarını bul
        return Yazar.findByPk($yazarid, {
          where: {
            KullaniciId: $kullaniciId
          }
        })
      })
      .then((yazar) => {
        //Dogrulama işlemleri
        if (yazar.id == null) {
          throw Error(res.status(400).send('Lütfen bilgileri doğru giriniz.').end())
        }
        else if (yazar.KullaniciId !== $kullaniciId) {
          throw Error(res.status(400).send('Yetkiniz olmayan Yada Var olmayan bir kitaba erişmeye çalışdınız.').end())
        }
        else {
          //Kitap silme işlemi
          return yazar;
        }

      })
      .then((yazar) => {
        Kitap.destroy({
          where: { id: req.params.id }
        })
      })
      .then(() => res.status(200).json('kitap başarıyla silindi').end())
      .catch(() => { throw Error(res.status(500).json('Kitap silinemedi').end()) })
      .catch((error) => error);



  }
};