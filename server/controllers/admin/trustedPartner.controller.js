const db = require('../../models');
const formidable = require('formidable');
const cloudinary = require('../../configs/cloudinary.config');
const TrustedPartner = db.trustedPartner;

exports.create = async (req, res) => {
    try{
        const form = new formidable.IncomingForm();
        form.parse(req, async (err, fields, files) => {
            if (err) {
                return res.status(400).json({
                    error: "Icon could not be uploaded"
                });
            }
            if(!(Object.keys(files).length > 0)){
                return res.status(400).json({
                    error: "Image is required"
                });
            }
            const {name} = fields;
            console.log('file', files.image.filepath);

            cloudinary.uploader.upload(files.image.filepath, (err, result) => {     
                console.log(result);
                TrustedPartner.create({
                    image: result.secure_url,
                    name: name,
                }). 
                then(data => {
                    res.status(200).send({
                        message: "New icon added successfully"
                    });
                }).
                catch(err => {
                    res.status(500).send({
                        message: err.message || "Some error occurred while creating the ProductImage."
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
        const trustedPartner = await TrustedPartner.findAll();
        res.send(trustedPartner);
    }catch(error){
        console.log(error);
    }
}