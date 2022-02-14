const MainQueries = require("../main_queries");

class Comment {
  constructor() {
    this.table = "comments";
    this.tableId = "commentId";
    this.baseQueries = new MainQueries(this.table);
  }

  getCommentById() {
    return this.baseQueries.getByCol()(this.tableId);
  }

  getCommentByCol(col) {
    return this.baseQueries.getByCol()(col);
  }

  createComment() {
    return `insert into ${this.table}(articleId,userId,comment,created_on)
        values ($1,$2,$3,NOW()) returning *;`;
  }

  updateComment() {
    return `update ${this.table} set comment = $1 where ${this.tableId} = $2 returning *;`;
  }

  deleteComment() {
    return this.baseQueries.getByColThenDelete()(this.tableId);
  }
}

module.exports = Comment;
