const database = require("../config/database");

const getSemuaPenerbit = () => {
  const query = `SELECT * FROM tb_penerbit`;
  return database.execute(query);
};

const buatPenerbitBaru = (penerbit) => {
  const query = `INSERT INTO tb_penerbit (penerbit) VALUES ('${penerbit}')`;
  return database.execute(query);
};

module.exports = {
  getSemuaPenerbit,
  buatPenerbitBaru,
};
