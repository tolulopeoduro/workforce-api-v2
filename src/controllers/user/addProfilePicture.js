const { ObjectId } = require("bson");
const fs = require('fs')

exports.addProfilePicture = async (req, res, next) => {
    const client = req.app.locals.db;
    const file = req.file;
    const user = await client.db("workforce-v2").collection("users").findOne({_id : ObjectId(req.body.userId)})
    const oldfile = user.imgUrl.split('/images/')[1]
    const update = () => {
        if (file) {
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
    
    if (fs.existsSync(`images/${oldfile}`)) {
        fs.unlinkSync(`images/${oldfile}`)
        update()
    } else {
        update()
    }
  }