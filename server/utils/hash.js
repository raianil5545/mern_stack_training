const bcrypt = require('bcrypt');

// hash is one-way: we cannot decrypt it
// we only compare plain password with stored hash
const hashPassword = async (password) => {
    const saltRounds = Number(process.env.SALT_ROUNDS) || 10;
    return bcrypt.hash(password, saltRounds);
};

const comparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
};

module.exports = { hashPassword, comparePassword };
