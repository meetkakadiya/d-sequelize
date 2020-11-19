const dbConfig = require("../config/database");

const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    dialect: dbConfig.dialect
  })

const db = {};

db.Sequelize = Sequelize
db.sequelize = sequelize

sequelize.sync()

db.artical = require('./artical')(sequelize, Sequelize)
db.exam = require('./exam')(sequelize, Sequelize)

db.users = require('./users')(sequelize, Sequelize);
db.posts = require('./post')(sequelize, Sequelize);
db.comments = require('./comment')(sequelize, Sequelize);

db.comments.belongsTo(db.posts, {as:'post', foreignKey:'id'});
db.posts.hasMany(db.comments, {as:'comment', foreignKey:'post_id'});
db.posts.belongsTo(db.users);
db.users.hasMany(db.posts, {as:'post', foreignKey:'user_id'} );

db.exam.belongsTo(db.artical, {foreignKey:'id'})
db.artical.hasOne(db.exam, {as:'exam', foreignKey:'artical_id'});

module.exports = db 