const db = require('../../models');
const Category = db.category;

exports.create = async (req, res) => {
    try{
        const category = await Category.create(req.body);
        res.send(category);
    }catch(error){
        console.log(error);
    }
};

exports.findAll = async (req, res) => {
    try{
        const category = await Category.findAll();
        res.send(category);
    }catch(error){
        console.log(error);
    }
}