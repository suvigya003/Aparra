const db = require('../models/admin');
const ProductImage = db.productImage;

exports.create = async (req, res) => {
    console.log(req.body);
    ProductImage.create(req.body).then(data => {
        res.send(
            {
                message: "Question added successfully",
            }
        );
    }).catch(err => {
        res.send(err);
        console.log(err);
    });
}

exports.findAll = async (req, res) => {
    ProductImage.findAll().then(data => {
        console.log(data);
        res.send(data);
    }).catch(err => {
        res.send(err);
        console.log(err);
    }
    );
}