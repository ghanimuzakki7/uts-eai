const database = require("../config/database");

const lihatUser = (email) => {
  const query = `SELECT * FROM tb_user WHERE email='${email}'`;
  return database.execute(query);
};

const buatUserBaru = (email, password) => {
  const query = `INSERT INTO tb_user (email, password) 
                    VALUES ('${email}', '${password}')`;
  return database.execute(query);
};

module.exports = {
  lihatUser,
  buatUserBaru,
};
