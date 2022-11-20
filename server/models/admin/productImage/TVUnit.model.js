module.exports = (sequelize, DataTypes) => {
    const TVUnit = sequelize.define("tVUnit", {
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
    return TVUnit;
  };