const db = require('../models/admin');
const Banner = db.banner;

exports.create = async (req, res) => {
    console.log(req.body);
    Banner.create(req.body).then(data => {
        res.send(
            {
                message: "Image added successfully",
            }
        );
    }).catch(err => {
        res.send(err);
        console.log(err);
    });
}

exports.findAll = async (req, res) => {
    Banner.findAll().then(data => {
        console.log(data);
        res.send(data);
    }).catch(err => {
        res.send(err);
        console.log(err);
    }
    );
}