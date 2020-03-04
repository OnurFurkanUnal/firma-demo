var kitaps = require('../controllers/kitaps');
var yazars = require('../controllers/yazars');
var kullanicis = require('../controllers/kullanicis');
var { signIn, welcome, isValid } = require('../controllers/handlers')

module.exports = function (router) {

  router.get('/kullanicis/:KullaniciAdi/:Sifre', kullanicis.index);
  router.get('/kullanicis', kullanicis.isValid);
  router.get('/kullanicis/logout', kullanicis.logOut);
  router.post('/kullanicis', kullanicis.create);

  router.get('/yazars', yazars.index);
  router.get('/yazars/:id', yazars.show);
  router.post('/yazars', yazars.create);
  router.put('/yazars/:id', yazars.update);
  router.delete('/yazars/:id', yazars.delete);

  router.get('/kitaps', kitaps.index);
  router.get('/kitaps/:id', kitaps.show);
  router.post('/kitaps', kitaps.create);
  router.put('/kitaps/:id', kitaps.update);
  router.delete('/kitaps/:id', kitaps.delete);


  return router
};