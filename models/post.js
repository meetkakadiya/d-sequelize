module.exports = (sequelize, Sequelize) => {
    var Posts = sequelize.define('posts', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false
        },
        user_id: {
            type: Sequelize.UUID,
            allowNull: false
        },
        content: {
            type: Sequelize.TEXT,
            required: true
        },
        userId:{
            type: Sequelize.STRING
        }
    });
    return Posts;
};