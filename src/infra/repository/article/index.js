const MainQueries = require('../main_queries')

class Article{
    constructor(){
        this.table = 'articles'
        this.tableId = 'articleId'
        this.baseQueries = new MainQueries(this.table)
    }

    getArticleById(){
       return this.baseQueries.getByCol()(this.tableId)
    }

    getArticleByCol(col){
        return this.baseQueries.getByCol()(col)
    }

    createArticle(){
        return `insert into ${this.table}(authorId,title,article,created_on,updated_on)
        values ($1,$2,$3,NOW(),NOW()) returning *;`
    }

    updateArticle(){
        return `update ${this.table} set title = $1,article = $2 ,updated_on = NOW() where ${this.tableId} = $3 returning *;`
    }

    deleteArticle(){
        return this.baseQueries.getByColThenDelete()(this.tableId)
    }

}

module.exports = Article