module.exports = (sequelize, DataTypes) => {
  const Banner = sequelize.define("banner", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },    
    image: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    subtitle: {
      type: DataTypes.STRING,
    },
    buttonText: {
      type: DataTypes.STRING,
    },
    link: {
      type: DataTypes.STRING,
    },
  });
  return Banner;
};