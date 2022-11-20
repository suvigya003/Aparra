module.exports = (sequelize, DataTypes) => {
    const StorageWardrobe = sequelize.define("storageWardrobe", {
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
    return StorageWardrobe;
  };