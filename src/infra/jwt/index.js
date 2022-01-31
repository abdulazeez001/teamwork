const jwt = require('jsonwebtoken');

module.exports = ({config})=>({
    signin:(options) =>(payload) =>{
        const opts = Object.assign({},options,{expiresIn:config.jwtTokenExpire})
        return jwt.sign(payload,config.secret,opts)
    },
    verify:(options) => (token) => {
        const opts = Object.assign({},options)
        return jwt.verify(token,config.secret,opts)
    }
})