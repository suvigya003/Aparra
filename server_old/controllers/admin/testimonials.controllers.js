const db = require('../../models');
const Testimonials = db.testimonials;

exports.create = async (req, res) => {
    try{
        const testimonials = await Testimonials.create(req.body);
        res.send(testimonials);
    }catch(error){
        console.log(error);
    }
};

exports.findAll = async (req, res) => {
    try{
        const testimonials = await Testimonials.findAll();
        res.send(testimonials);
    }catch(error){
        console.log(error);
    }
}