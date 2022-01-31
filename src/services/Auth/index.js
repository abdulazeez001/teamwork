const {comparePassword} = require('../../infra/encryption');
const config = require('../../config');
const jwt = require('../../infra/jwt');
const UserService = require('../Users')
class AuthenticationService{

    constructor(userService,webToken){
        this.user = userService
        this.webToken = webToken
    }

    registerUser(){
        
    }

    loginUser({email,password}){
        return new Promise( async(resolve, reject)=>{
            try{
                // Validate input
                 
                //Check for user in the database
                let user  = await this.user.getUserByEmail({email})
                
                if (!user){
                    throw new Error('Invalid Credential')
                }
                
                // Validate password
                const validatePassword = comparePassword(password,user[0].password)
                if (!validatePassword){
                    throw new Error('Invalid Credential')
                }

                // initiate sign in token
                const signIn = this.webToken.signin()
                // Resolve with token
                resolve({
                    token:signIn({
                        id:user[0].id,
                        first_name:user[0].first_name,
                        last_name:user[0].last_name,
                        email:user[0].email,
                        password:user[0].password,
                        gender:user[0].gender,
                        job_role:user[0].job_role,
                        department:user[0].department,
                        address:user[0].address
                    })
                })

            }catch(error){
                reject(error)
            }

        })

    }

    logoutUser(){

    }



}

module.exports = new AuthenticationService(UserService,jwt(config))

