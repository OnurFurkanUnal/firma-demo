'use strict';
module.exports = (sequelize, DataTypes) => {
  const Kullanici = sequelize.define('Kullanici', {
    KullaniciAdi: DataTypes.STRING,
    Sifre: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Kullanici.associate = function (models) {
    Kullanici.hasMany(models.Yazar, { foreingKey: 'KullaniciId' }, { onDelete: 'CASCADE' }, { onDelete: 'CASCADE' }, { onUpdate: 'CASCADE' })
  };
  return Kullanici;
};