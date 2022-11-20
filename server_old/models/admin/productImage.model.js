module.exports = (sequelize, DataTypes) => {
    const ProductImage = sequelize.define("productImage", {
      desc: {
        type: DataTypes.STRING,
      },
      size: {
        type: DataTypes.STRING,
      },
    });
    return ProductImage;
  };
  