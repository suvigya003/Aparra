const db = require('../../models');
const Banner = db.banner;

exports.create = async (req, res) => {
    try{
        const banner = await Banner.create(req.body);
        res.send(banner);
    }catch(error){
        console.log(error);
    }
};

exports.findAll = async (req, res) => {
    try{
        const banners = await Banner.findAll();
        res.send(banners);
    }catch(error){
        console.log(error);
    }
}