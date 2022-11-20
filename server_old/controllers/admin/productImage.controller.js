const db = require('../../models');
const ProductImage = db.productImage;

exports.create = async (req, res) => {
    try{
        const productImage = await ProductImage.create(req.body);
        res.send(productImage);
    }catch(error){
        console.log(error);
    }
};

exports.findAll = async (req, res) => {
    try{
        const productImage = await ProductImage.findAll();
        res.send(productImage);
    }catch(error){
        console.log(error);
    }
}