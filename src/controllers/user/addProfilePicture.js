const { ObjectId } = require("bson");

exports.addProfilePicture = async (req, res, next) => {
    console.log(req.body.userId)
    const file = req.file;
    if (file) {
        const client = req.app.locals.db;
        client.db("workforce-v2").collection("users").updateOne(
            {_id : ObjectId(req.body.userId)} ,
            {$set : {imgUrl : `${req.protocol}://${req.get('host')}/images/${req.file.filename}`}},
            {upsert : true}
        ).then(() => {
            return res.status(200).json({
                status : "successful"
            })
        })
    }   
  }