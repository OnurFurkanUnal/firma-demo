'use strict';
module.exports = (sequelize, DataTypes) => {
  const Yazar = sequelize.define('Yazar', {
    YazarAdi: DataTypes.STRING,
    KullaniciId: DataTypes.INTEGER
  }, {});
  Yazar.associate = function (models) {
    Yazar.hasMany(models.Kitap, { foreingKey: 'YazarId' }, { onDelete: 'CASCADE' }, { onUpdate: 'CASCADE' });
    Yazar.belongsTo(models.Kullanici, { foreingKey: 'KullaniciId' }, { as: 'kullanicis' }, { onDelete: 'CASCADE' }, { onUpdate: 'CASCADE' })
  };
  return Yazar;
};
