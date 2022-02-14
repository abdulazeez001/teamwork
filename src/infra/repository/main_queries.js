class MainQueries {
  constructor(table) {
    this.table = table;
  }

  static getAllValuesFrom(table_) {
    return `select * from ${table_}`;
  }

  getByCol() {
    return (col) => {
      return `select * from ${this.table} where ${col} = $1;`;
    };
  }

  getByColThenDelete() {
    return (col) => {
      return `delete from ${this.table} where ${col} = $1;`;
    };
  }
}

module.exports = MainQueries;
