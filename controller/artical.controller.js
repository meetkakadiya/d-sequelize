// const db = require("../models/artical");
const db = require("../models");
// models path depend on your structure
const express = require('express')

const { Op } = require('sequelize');
const models = require('../models');
const sequelize = models.sequelize;


const Artical = db.artical;



const addArtical = async (req, res) => {
    try {
        let data = await Artical.create(req.body);
        res.status(200).send(data)
    } catch (err) {
        res.status(400).send("data not added !!")
    }
}

const allData = async (req, res) => {
    try {
        let data = await Artical.findAll()
        res.status(200).send(data)

    } catch (err) {
        res.status(400).send("data not avaliable !!")
    }
}

const findone = async (req, res) => {
    try {
        var id = req.params.id
        let data = await Artical.findByPk(id)
        res.status(200).send(data)

    } catch (err) {
        res.status(400).send("data not avaliable !!")
    }
}

const update = async (req, res) => {
    try {
        var id = req.params.id
        let data = await Artical.update({
            title: req.body.title,
            body: req.body.body
        }, { where: { id: id } })
        res.status(200).send(data)

    } catch (err) {
        res.status(400).send("data not update !!")
    }
}

const remove = async (req, res) => {
    try {
        var id = req.params.id
        let data = await Artical.destroy({ where: { id: id } })
        res.status(200).send("data removed")
    } catch (err) {
        res.status(400).send("data not remove !!")
    }
}

const findquery = async (req, res) => {
    try {
        let data = await Artical.findAll({
            order:[['createdAt', 'DESC']],
            where: {
                id: {
                    [Op.or]: [2, 9]
                },
            },
                // offset: 1,
                // limit: 1
        })
        res.status(200).send(data)

    } catch (err) {
        res.status(400).send("data not find !!")
    }
}

const findorcreate = async (req, res) => {
    try{
        let[artical, created] = await Artical.findOrCreate({
            where: {id : 5},
            defaults:{
                title:"new added",
                body:"hello it's new cerated"
            }
        })
        res.status(200).send(artical)
        if(cerated){
            res.status(200).send(created)
        }

    }catch (err) {
        res.status(400).send("data not find or created !!")
    }
}
// Unmanaged Transaction
const data = async (req, res) => {

    const t = await sequelize.transaction();

    try{
        let data = await Artical.create(req.body,{transaction: t})
        res.send(data)
        
        await t.commit();

    }catch (err) {
            await t.rollback();
        res.status(400).send(err)
    }
}
// Managed Transaction
const managedata = async (req, res) => {
    try{
        const result = await sequelize.transaction(async (t) => {
            let data = await Artical.create(req.body,{transaction :t})
            res.send(data)
        })
        res.send(result)

    }catch(err){
        res.send(err)
    }

}


module.exports = {
    addArtical, allData, findone, update, remove, findquery, findorcreate, data, managedata

}