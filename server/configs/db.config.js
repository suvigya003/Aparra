module.exports = {
    host: process.env.HOST,
    user: 'root',
    password: process.env.PASSWORD,
    database: 'aparra',
    port:process.env.PORT,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };
  