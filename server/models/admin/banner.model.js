module.exports = (sequelize, DataTypes) => {
    const Banner = sequelize.define("banner", {
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
  