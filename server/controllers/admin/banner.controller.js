const db = require('../../models');
const formidable = require('formidable');
const cloudinary = require('../../configs/cloudinary.config');
const Banner = db.banner;

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
            const {title, subtitle, buttonText, link} = fields;
            console.log('file', files.image.filepath);

            cloudinary.uploader.upload(files.image.filepath, (err, result) => {     
                console.log(result);
                Banner.create({
                    image: result.secure_url,
                    title: title,
                    subtitle: subtitle,
                    buttonText: buttonText,
                    link: link
                }). 
                then(data => {
                    res.status(200).send({
                        message: "Product Image added successfully"
                    });
                }).
                catch(err => {
                    res.status(500).send({
                        message: err.message || "Some error occurred while creating the Banner."
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
        const banner = await Banner.findAll();
        res.send(banner);
    }catch(error){
        console.log(error);
    }
}