const cloudinary = require('../../middleware/cloudinary')

exports.createPost = (req , res) => {
    const client = req.app.locals.db;
    cloudinary.uploader.upload(req.file.path , {folder : '/workforce-v2/uploads/posts' , upload_preset : 'ml_default'})
    
    .then(result => {
        const body = {...JSON.parse(req.body.data) , imgUrl : result.url}
        
        client.db("workforce-v2").collection("posts").insertOne(body , (error) => {
            if (error) return ;
            res.status(201).json({
                status : 201,
                    message : "post created"
            })
        })  
    })
}   