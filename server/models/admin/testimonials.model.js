module.exports = (sequelize, DataTypes) => {
  const Testimonials = sequelize.define("testimonials", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    message: {
      type: DataTypes.STRING,
    },
    designation: {
      type: DataTypes.STRING,
    },
    videoId: {
      type: DataTypes.STRING,
    },
  });
  return Testimonials;
};