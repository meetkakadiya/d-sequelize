module.exports = (sequelize, Sequelize) => {

    var Users = sequelize.define('users', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false
        },
        username: {
            type: Sequelize.STRING,
            required: true
        },
        role: {
            type: Sequelize.ENUM,
            values: ['user', 'admin', 'disabled']

        }
    });
    return Users;
};