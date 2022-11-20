module.exports = (sequelize, DataTypes) => {
    const PoojaUnit = sequelize.define("poojaUnit", {
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
    return PoojaUnit;
  };