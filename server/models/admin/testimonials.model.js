module.exports = (sequelize, DataTypes) => {
    const Testimonials = sequelize.define("testimonials", {
      name: {
        type: DataTypes.STRING,
      },
      message: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
    });
    return Testimonials;
  };
  