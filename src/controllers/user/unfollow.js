const { ObjectId } = require("bson")

exports.unfollow = async (req , res) => {
    const client = req.app.locals.db
    client.db("workforce-v2").collection("users").updateOne(
        {_id : ObjectId(req.params.id)} ,
        {$pull : {followers : `${req.body.userId}`}},
        {upsert : true}
        ).then(() => {
            return res.status(200).json({
                status : "successful"
        })
    })
}