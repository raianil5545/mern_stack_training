const User = require('../model/user.model');
const { hashPassword, comparePassword } = require('../utils/hash');

const register = async (req, res) => {
    try {
        const { fullName, username, email, password } = req.body;

        if (!fullName || !username || !email || !password) {
            return res.status(400).send({
                success: false,
                message: 'fullName, username, email and password are required',
                data: null
            });
        }

        const existingUser = await User.findOne({
            $or: [{ email }, { username }]
        });

        if (existingUser) {
            return res.status(400).send({
                success: false,
                message: 'User with this email or username already exists',
                data: null
            });
        }

        const hashedPassword = await hashPassword(password);

        const user = await User.create({
            fullName,
            username,
            email,
            password: hashedPassword
        });

        const { fullName: name, username: userName, email: userEmail, isActive } = user;

        return res.status(201).send({
            success: true,
            message: 'User registered successfully',
            data: {
                fullName: name,
                username: userName,
                email: userEmail,
                isActive
            }
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error.message,
            data: null
        });
    }
};

// login blueprint - to be completed
const login = async (req, res) => {
    try {
        // 1. get email and password from req.body

        // 2. validate: email and password are required
        //    if missing -> return 400

        // 3. find user by email in database
        //    const user = await User.findOne({ email })

        // 4. if user not found -> return 401 (invalid credentials)

        // 5. compare plain password with hashed password
        //    const isMatch = await comparePassword(password, user.password)
        //    note: hash cannot be decrypted, only compared

        // 6. if password does not match -> return 401 (invalid credentials)

        // 7. check if user is active (optional)
        //    if (!user.isActive) -> return 403

        // 8. return success response with user data (do not send password)
        //    later: generate jwt token here
        //    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })

        // 9. return the success response with user data and token

        return res.status(501).send({
            success: false,
            message: 'Login endpoint not implemented yet',
            data: null
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error.message,
            data: null
        });
    }
};

module.exports = {
    register,
    login
};
