const db = require('../../models');
const formidable = require('formidable');
const cloudinary = require('../../configs/cloudinary.config');
const Testimonials = db.testimonials;

exports.create = async (req, res) => {
    try{
        const form = new formidable.IncomingForm();
        form.parse(req, async (err, fields, files) => {
            if (err) {
                return res.status(400).json({
                    error: "Image could not be uploaded"
                });
            }
            if(!(Object.keys(files).length > 0)){
                return res.status(400).json({
                    error: "Image is required"
                });
            }
            const {name, message, videoId, designation} = fields;
            console.log('file', files.image.filepath);

            cloudinary.uploader.upload(files.image.filepath, (err, result) => {     
                console.log(result);
                Testimonials.create({
                    image: result.secure_url,
                    name: name,
                    message: message,
                    designation: designation,
                    videoId: videoId
                }). 
                then(data => {
                    res.status(200).send({
                        message: "Product Image added successfully"
                    });
                }).
                catch(err => {
                    res.status(500).send({
                        message: err.message || "Some error occurred while creating the Testimonials."
                    });
                });
            });
        });
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