const { ObjectId } = require("bson")

exports.likePost = async (req , res) => {
    const client = req.app.locals.db
    client.db("workforce-v2").collection("posts").updateOne(
        {_id : ObjectId(req.params.id)} ,
        {$push : {likes : `${req.body.userId}`}},
        {upsert : true}
        ).then(() => {
            return res.status(200).json({
                status : "successful"   
        })
    })
}