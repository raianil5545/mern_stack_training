// const jwt = require('jsonwebtoken');

// auth middleware blueprint - to be completed
const authMiddleware = async (req, res, next) => {
    try {
        // 1. get token from request header
        //    const authHeader = req.headers.authorization
        //    example: "Bearer eyJhbGciOi..."

        // 2. validate: token must exist
        //    if missing -> return 401 (unauthorized)

        // 3. extract token from "Bearer <token>"
        //    const token = authHeader.split(' ')[1]

        // 4. verify token using jwt secret
        //    const decoded = jwt.verify(token, process.env.JWT_SECRET)

        // 5. if token invalid or expired -> return 401

        // 6. find user from decoded token id (optional but recommended)
        //    const user = await User.findById(decoded.id)
        //    if user not found -> return 401

        // 7. attach user to request
        //    req.user = user
        //    or req.user = decoded

        // 8. call next() to move to next middleware/controller
        //    return next()

        return res.status(501).send({
            success: false,
            message: 'Auth middleware not implemented yet',
            data: null
        });
    } catch (error) {
        return res.status(401).send({
            success: false,
            message: 'Unauthorized',
            data: null
        });
    }
};

module.exports = { authMiddleware };
