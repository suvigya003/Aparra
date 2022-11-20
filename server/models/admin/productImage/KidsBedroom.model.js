module.exports = (sequelize, DataTypes) => {
    const KidsBedroom = sequelize.define("kidsBedroom", {
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
    return KidsBedroom;
  };