const dbConfig = require('../configs/db.config');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.banner = require('./admin/banner.model')(sequelize, Sequelize);
db.category = require('./admin/category.model.js')(sequelize, Sequelize);
db.productImage = require('./admin/productImage.model.js')(sequelize, Sequelize);
db.testimonials = require('./admin/testimonials.model.js')(sequelize, Sequelize);

module.exports = db;