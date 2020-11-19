const db = require("../models");

const User = db.users;
const Post = db.posts;
const Comment = db.comments;
const Exam = db.exam;
const Artical = db.artical;

const addUser = async (req, res) => {
    try {
        let data = await User.create(req.body)
        res.status(200).send(data)
    } catch (err) {
        res.status(400).send(err)
    }
}

const addPost = async (req, res) => {
    try {
        let data = await Post.create(req.body)
        res.status(200).send(data)
    } catch (err) {
        res.status(400).send(err)
    }
}

const addComments = async (req, res) => {
    try {
        let data = await Comment.create(req.body)
        res.status(200).send(data)
    } catch (err) {
        res.status(400).send(err)
    }
}

const allData = async (req, res) => {

    try{
        User.findAll({
            include: [
                {
                    model: Post, as:'post',
                    include:[
                        {
                            model: Comment, as:'comment'
                        }
                    ]
                }
            ]
        }).then(users => {
            // console.log(users)
            res.send(users)
        });
    }catch(err){
        res.status(400).send(err)
    }
   
}

//Eager Loading example

const findInJoin = async (req, res) => {
    try{
        let username = req.params.name
        console.log(username)
        let data = await User.findOne({
            where:{
                username:username
            },
            include:[
                {
                    model:Post, as:'post',
                    include:[
                        {
                            model:Comment, as:'comment'
                        }
                    ]
                }
            ]
        })
        res.send(data)
    }catch (err) {
        res.status(400).send(err)
    }
    
}

const addNewTable = async (req, res) => {
    try{
        let data = await Exam.create(req.body)
        res.send(data)
    }catch (err) {
        res.status(400).send(err)
    }
}

const postData = async (req, res) => {
    try{
        let data = await Artical.findAll({
            include:[
                {
                    model: Exam, as:'exam'
                }
            ]
        })
        res.send(data)
    }catch (err) {
        res.status(400).send(err)
    }
}

const associationAlias = async (req, res) => {
    try{
        // var Creator = Artical.belongsTo(Exam, {as:'exam'})
        let data = Artical.create({
            title:'chair',
            body:'all set adta in chair'
        },{
            include:[{Exam, as:'exam'}]
        })
        res.send(data)
    }catch(err){
        res.status(400).send(err)
    }
}



module.exports = {
    addUser, addPost, addComments, allData, addNewTable, postData, findInJoin, associationAlias
}