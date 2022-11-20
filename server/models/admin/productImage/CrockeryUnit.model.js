module.exports = (sequelize, DataTypes) => {
    const CrockeryUnit = sequelize.define("crockeryUnit", {
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
    return CrockeryUnit;
  };