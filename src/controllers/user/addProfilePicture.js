const { ObjectId } = require("bson");
const cloudinary = require('../../middleware/cloudinary')

exports.addProfilePicture = async (req, res, next) => {
    const client = req.app.locals.db;
    const file = req.file;
    try {
        cloudinary.uploader.upload(req.file.path , {folder : '/workforce-v2/uploads' , upload_preset : 'ml_default'})
        .then(result => {

            client.db("workforce-v2").collection("users").updateOne(
                {_id : ObjectId(req.body.userId)} ,
                {$set : {imgUrl : result.url}},
                {upsert : true}
                ).then(() => {
                    return res.status(200).json({
                        status : "successful"
                })
            })  

        })
        .catch(err => {})
        
    } catch {

    }
    
  }