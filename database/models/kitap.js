'use strict';
module.exports = (sequelize, DataTypes) => {
  const Kitap = sequelize.define('Kitap', {
    KitapAdi: DataTypes.STRING,
    YazarId: DataTypes.INTEGER
  }, {});
  Kitap.associate = function (models) {
    Kitap.belongsTo(models.Yazar, { foreingKey: 'YazarId' }, { as: 'yazars' }, { onDelete: 'CASCADE' }, { onUpdate: 'CASCADE' });
  };
  return Kitap;
};