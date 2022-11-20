module.exports = (sequelize, DataTypes) => {
    const VanityVan = sequelize.define("vanityVan", {
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
    return VanityVan;
  };