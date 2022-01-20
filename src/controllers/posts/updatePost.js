const { ObjectId } = require("bson");
const cloudinary = require("../../middleware/cloudinary");
import fs from 'fs'

exports.updatePost = async (req , res) => {
    const client = req.app.locals.db;
    if (req.file) {
        cloudinary.uploader.upload(req.file.path , {folder : '/workforce-v2/uploads/posts' , upload_preset : 'ml_default'})
        .then(result => {
            const body = req.file ? {...JSON.parse(req.body.data) , imgUrl : result.url} : {...JSON.parse(req.body.data)}
            client.db("workforce-v2").collection("posts").updateOne(
                {_id : ObjectId(req.params.id)},
                {$set : {...body}},
                {upsert : true}
            ).then(() => {
                fs.unlink(req.file.path)
                res.status(200).json({
                    message : "successful"
                })
            })
        })
    } else {
        const body = {...JSON.parse(req.body.data)}
        client.db("workforce-v2").collection("posts").updateOne(
            {_id : ObjectId(req.params.id)},
            {$set : {...body}},
            {upsert : true}
        ).then(() => {
            res.status(200).json({
                message : "successful"
            })
        })
    }
}   