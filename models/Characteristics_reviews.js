const {Sequelize, DataTypes} = require('sequelize');

const Characteristics_reviews = sequelize.define('char_reviews', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  characteristic_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  review_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  value: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize: sequelize
});

module.exports = Characteristics_reviews;