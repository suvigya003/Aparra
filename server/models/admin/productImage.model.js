module.exports = (sequelize, DataTypes) => {
  const ProductImage = sequelize.define("productImage", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: DataTypes.STRING,
    },
    desc: {
      type: DataTypes.STRING,
    },
    size: {
      type: DataTypes.STRING,
    },
  });
  return ProductImage;
};