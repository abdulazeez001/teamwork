const MainQueries = require('../main_queries');

class User {
  constructor() {
    this.table = 'users';
    this.baseQueries = new MainQueries(this.table);
  }

  getUserById() {
    return this.baseQueries.getByCol()('id');
  }

  getUserByCol(col) {
    return this.baseQueries.getByCol()(col);
  }

  createUser() {
    return `insert into ${this.table}(first_name,last_name,email,password,gender,job_role,department,address,created_on)
        values ($1,$2,$3,$4,$5,$6,$7,$8,NOW()) returning *;`;
  }
}

module.exports = User;
