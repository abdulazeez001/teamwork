const { pool } = require('../../config');
const {encryptPassword} = require('../../infra/encryption');
const {article,
       gif,
       user,
       comment,
       BaseQueries
    } = require('../../infra/repository')

class UserService {
    constructor(model,baseQueries,userRepository,articleRepository,gifRepository,commentRepository){
        this.model = model
        this.baseQueries = baseQueries
        this.userRepository = userRepository
        this.articleRepository = articleRepository
        this.gifRepository = gifRepository
        this.commentRepository = commentRepository
    }

    async createEmpoloyee({first_name,last_name,email,password,gender,job_role,department,address}){
      return new Promise(async (resolve,reject) => {
        try{
           // Validate input

           // Encrypt password
            password = encryptPassword(password)

            // Store in database
            const {rows} = await this.model.query(
                this.userRepository.createUser(),
                [first_name,last_name,email,password,gender,job_role,department,address]
            )
    
            resolve(rows)
           }catch(error){
               reject(error)
           }
      })
    }

    async getUserByEmail({email}){
        return new Promise(async (resolve,reject) => {
            try{
                // Validate input


                const {rows} = await this.model.query(
                    this.userRepository.getUserByCol('email'),
                    [email]
                )
        
                resolve(rows)
               }catch(error){
                   reject(error)
               }
          })
    }

    async postArticle({authorId,title,article}){
        return new Promise(async (resolve,reject) => {
            try{
                // Validate input

                const {rows} = await this.model.query(
                    this.articleRepository.createArticle(),
                    [authorId,title,article]
                )

                resolve(rows)
            }catch(error){
                reject(error)
            }
        })
    }

    async getAllArticle(){
        return new Promise(async (resolve,reject) => {
            try{
                // Validate input

                const {rows} = await this.model.query(
                    this.baseQueries.BaseQueries.getAllValuesFrom('articles')
                )

                resolve(rows)
            }catch(error){
                reject(error)
            }
        })
    }

    async getArticleById({articleId}){
        return new Promise(async (resolve,reject) => {
            try{
                // Validate input

                const {rows} = await this.model.query(
                    this.articleRepository.getArticleById(),
                    [articleId]
                )

                resolve(rows)
            }catch(error){
                reject(error)
            }
        })
    }

    async getArticleByAuthorId({authorId}){
        return new Promise(async (resolve,reject) => {
            try{
                // Validate input

                const {rows} = await this.model.query(
                    this.articleRepository.getArticleByCol('authorId'),
                    [authorId]
                )

                resolve(rows)
            }catch(error){
                reject(error)
            }
        })
    }


    async editArticle({title,article,articleId}){
        return new Promise(async (resolve,reject) => {
            try{
                // Validate input

                const {rows} = await this.model.query(
                    this.articleRepository.updateArticle(),
                    [title,article,articleId]
                )

                resolve(rows)
            }catch(error){
                reject(error)
            }
        })
    }

    async deleteArticle({articleId}){
        return new Promise(async (resolve,reject) => {
            try{
                // Validate input

                const {rows} = await this.model.query(
                    this.articleRepository.deleteArticle(),[articleId]
                )

                resolve(rows)
            }catch(error){
                reject(error)
            }
        })
    }

    async postGif({authorId,title,gif}){
        return new Promise(async (resolve,reject) => {
            try{
                // Validate input

                const {rows} = await this.model.query(
                    this.gifRepository.createGif(),
                    [authorId,title,gif]
                )

                resolve(rows)
            }catch(error){
                reject(error)
            }
        })
    } 

    async getAllGif(){
        return new Promise(async (resolve,reject) => {
            try{
                // Validate input

                const {rows} = await this.model.query(
                    this.baseQueries.BaseQueries.getAllValuesFrom('gifs')
                )

                resolve(rows)
            }catch(error){
                reject(error)
            }
        })
    }

    async getGifById({gifId}){
        return new Promise(async (resolve,reject) => {
            try{
                // Validate input

                const {rows} = await this.model.query(
                    this.gifRepository.getGifById(),
                    [gifId]
                )

                resolve(rows)
            }catch(error){
                reject(error)
            }
        })
    }

    async getGifByAuthorId({authorId}){
        return new Promise(async (resolve,reject) => {
            try{
                // Validate input

                const {rows} = await this.model.query(
                    this.gifRepository.getGifByCol('authorId'),
                    [authorId]
                )

                resolve(rows)
            }catch(error){
                reject(error)
            }
        })
    }

    async deleteGif({articleId}){
        return new Promise(async (resolve,reject) => {
            try{
                // Validate input

                const {rows} = await this.model.query(
                    this.gifRepository.deleteGif(),[articleId]
                )

                resolve(rows)
            }catch(error){
                reject(error)
            }
        })
    }

    async postComment({articleId,userId,comment}){
        return new Promise(async (resolve,reject) => {
            try{
                // Validate input

                const {rows} = await this.model.query(
                    this.commentRepository.createComment(),
                    [articleId,userId,comment]
                )

                resolve(rows)
            }catch(error){
                reject(error)
            }
        })
    }

    async getCommentByCol({articleId}){
        return new Promise(async (resolve,reject) => {
            try{
                // Validate input

                const {rows} = await this.model.query(
                    this.commentRepository.getCommentByCol('articleId'),
                    [articleId]
                )

                resolve(rows)
            }catch(error){
                reject(error)
            }
        })
    }

    async updateComment({commentId,comment}){
        return new Promise(async (resolve,reject) => {
            try{
                // Validate input

                const {rows} = await this.model.query(
                    this.commentRepository.updateComment(),
                    [comment,commentId]
                )

                resolve(rows)
            }catch(error){
                reject(error)
            }
        })
    }

    async deleteComment({commentId}){
        return new Promise(async (resolve,reject) => {
            try{
                // Validate input

                const {rows} = await this.model.query(
                    this.commentRepository.deleteComment(),
                    [commentId]
                )

                resolve(rows)
            }catch(error){
                reject(error)
            }
        })
    }
    
}


module.exports = new UserService(
    pool,
    BaseQueries,
    user,
    article,
    gif,
    comment
)
