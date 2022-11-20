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
db.crockeryUnit = require('./admin/productImage/CrockeryUnit.model.js')(sequelize, Sequelize);
db.doors = require('./admin/productImage/Doors.model.js')(sequelize, Sequelize);
db.kidsBedroom = require('./admin/productImage/KidsBedroom.model.js')(sequelize, Sequelize);
db.poojaUnit = require('./admin/productImage/PoojaUnit.model')(sequelize, Sequelize);
db.storageWardrobe = require('./admin/productImage/StorageWardrobe.model')(sequelize, Sequelize);
db.studyTable = require('./admin/productImage/StudyTable.model')(sequelize, Sequelize);
db.tVUnit = require('./admin/productImage/TVUnit.model')(sequelize, Sequelize);
db.vanityVan = require('./admin/productImage/VanityVan.model')(sequelize, Sequelize);

module.exports = db;