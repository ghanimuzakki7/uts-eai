const database = require("../config/database");

const getBuku = (conditions) => {
  const string = Object.keys(conditions);
  if (string.length == 0) {
    const query = `SELECT tb_penerbit.penerbit, tb_buku.judul, tb_buku.penulis, tb_buku.tahun_terbit FROM tb_buku JOIN tb_penerbit ON tb_buku.id_penerbit = tb_penerbit.id`;
    return database.execute(query);
  } else {
    let where = "";
    string.forEach((s) => {
      if (s == "judul") {
        where += `${s} LIKE '%${conditions[s]}%' AND `;
      } else {
        where += `${s}='${conditions[s]}' AND `;
      }
    });
    where = where.slice(0, -5);
    const query = `SELECT tb_penerbit.penerbit, tb_buku.judul, tb_buku.penulis, tb_buku.tahun_terbit FROM tb_buku JOIN tb_penerbit ON tb_buku.id_penerbit = tb_penerbit.id WHERE ${where}`;
    return database.execute(query);
  }
};

const buatBukuBaru = (body) => {
  const query = `INSERT INTO tb_buku (id_penerbit, judul, penulis, tahun_terbit) 
                    VALUES (${body.id_penerbit}, '${body.judul}', '${body.penulis}', '${body.tahun_terbit}')`;
  return database.execute(query);
};

const updateBuku = (id, body) => {
  let update = "";
  const data = Object.keys(body);
  data.forEach((d) => {
    update += `${d}='${body[d]}', `;
  });
  update = update.slice(0, -2);
  const query = `UPDATE tb_buku 
                    SET ${update}
                    WHERE id=${id}`;
  return database.execute(query);
};

const hapusBuku = (id) => {
  const query = `DELETE FROM tb_buku WHERE id=${id}`;
  return database.execute(query);
};

module.exports = {
  getBuku,
  buatBukuBaru,
  updateBuku,
  hapusBuku,
};
