const { ObjectID } = require("mongodb");
const {ObjectId}  = require("bson")

exports.getUser = async  (req , res) => {
    const client = req.app.locals.db;
    const user = await client.db("workforce-v2").collection("users").findOne({_id : ObjectId(req.params.id)})
    console.log(user)
    res.status(200).json({
        data : user
    })
}