const jwt = require('jsonwebtoken')

exports.auth = (req , res , next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token , 'my-string');
        const userId = decoded.userId 
        if (req.body.userId !== userId) {
            throw 'Invalid user id'
        } else {
            next();
        }
    } catch {
        res.status(401).json({
            error : new Error('invalid')
        })
    }
}