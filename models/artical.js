
module.exports = (sequelize, Sequelize) => {

    var Artical = sequelize.define('artical', {
        title:{
            type :Sequelize.STRING,
            allowNull : false
        } ,
        body: Sequelize.TEXT
    });


    return Artical;

};