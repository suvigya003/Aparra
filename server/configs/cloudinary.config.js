const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: 'dwhirlleu',
  api_key: '645984783872422',
  api_secret: 'upAbv7cLXrS3p4dLdNoKMrh9Vdo',
  secure: true,
});

module.exports = cloudinary;
