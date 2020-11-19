
module.exports = (sequelize, Sequelize) => {

    var Exam = sequelize.define('exam', {
       subject : Sequelize.STRING,
        marks: Sequelize.STRING,
        TotalMarks : Sequelize.STRING,
        artical_id: Sequelize.STRING,
    });


    return Exam;

};