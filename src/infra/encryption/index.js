const bcrypt = require('bcryptjs');

const encryptPassword = password =>{
    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(password,salt)

    return hashedPassword
}

const comparePassword = (password,hashedPassword) =>{
    return bcrypt.compareSync(password,hashedPassword)
}

module.exports = {
    encryptPassword,
    comparePassword
}