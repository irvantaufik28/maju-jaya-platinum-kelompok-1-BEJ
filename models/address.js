'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.User, {
        foreignKey: { name: 'address_id', allowNull: false },
        as: 'address',
      });
    }
  }
  address.init({
    province: DataTypes.STRING,
    city: DataTypes.STRING,
    postal_code: DataTypes.STRING,
    detail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'address',
  });
  return address;
};