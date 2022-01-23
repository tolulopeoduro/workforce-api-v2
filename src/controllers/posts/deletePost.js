const { ObjectId } = require("bson");

exports.deletePost = async (req , res) => {
    const client = req.app.locals.db;
    const post = await client.db("workforce-v2").collection("posts").find({_id : ObjectId(req.params.id)}).toArray()
    client.db("workforce-v2").collection("posts").deleteOne({_id : ObjectId(req.params.id)})
    .then(() => {
        res.status(200).json({
          message : 'down'  
        })

    })
}