module.exports = (sequelize, DataTypes) => {
  return sequelize.define('info', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.INTEGER
    },
    rating: {
      type: DataTypes.INTEGER
    },
    date: {
      type: DataTypes.BIGINT
    },
    summary: {
      type: DataTypes.TEXT
    },
    body: {
      type: DataTypes.TEXT
    },
    recommended: {
      type: DataTypes.BOOLEAN
    },
    reported: {
      type: DataTypes.BOOLEAN
    },
    reviewer_name: {
      type: DataTypes.TEXT
    },
    reviewer_email: {
      type: DataTypes.TEXT
    },
    response: {
      type: DataTypes.TEXT
    },
    helpfulness: {
      type: DataTypes.INTEGER
    }
  });
};