const db = require('../models/admin');
const Category = db.category;

exports.create = async (req, res) => {
    console.log(req.body);
    Category.create(req.body).then(data => {
        res.send(
            {
                message: "Icons added successfully",
            }
        );
    }).catch(err => {
        res.send(err);
        console.log(err);
    });
}

exports.findAll = async (req, res) => {
    Category.findAll().then(data => {
        console.log(data);
        res.send(data);
    }).catch(err => {
        res.send(err);
        console.log(err);
    }
    );
}