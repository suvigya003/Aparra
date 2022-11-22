module.exports = (sequelize, DataTypes) => {
  const TrustedPartner = sequelize.define("trustedPartner", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: DataTypes.STRING,
    },
  });
  return TrustedPartner;
};