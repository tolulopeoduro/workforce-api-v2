const { ObjectId } = require("bson");

exports.updatePost = async (req , res) => {
    const client = req.app.locals.db;
    const data = await client.db("workforce-v2").collection("posts").updateOne(
        {_id : ObjectId(req.params.id)} ,
        {$set : {...req.body}},
        {upsert : true}
    ).then(() => {
        return res.status(200).json({
            status : "successful"
        })
    })
}