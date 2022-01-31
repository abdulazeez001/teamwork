const MainQueries = require('../main_queries')

class Gif{
    constructor(){
        this.table = 'gifs'
        this.tableId = 'gifId'
        this.baseQueries = new MainQueries(this.table)
    }

    getGifById(){
       return this.baseQueries.getByCol()(this.tableId)
    }

    getGifByCol(col){
        return this.baseQueries.getByCol()(col)
    }

    createGif(){
        return `insert into ${this.table}(authorId,title,gif,created_on)
        values ($1,$2,$3,NOW()) returning *;`
    }

    deleteGif(){
        return this.baseQueries.getByColThenDelete()(this.tableId)
    }

}

module.exports = Gif