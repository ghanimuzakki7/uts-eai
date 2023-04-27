const BukuModel = require("../models/buku");

const getBuku = async (req, res) => {
  try {
    let [buku] = await BukuModel.getBuku(req.query);
    if (buku.length == 1) {
      buku = buku[0];
    }
    res.status(200).json({
      status: 200,
      timestamp: new Date().toLocaleTimeString(),
      message: "GET buku success",
      buku,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error,
    });
  }
};

const buatBukuBaru = async (req, res) => {
  try {
    await BukuModel.buatBukuBaru(req.body);
    res.status(201).json({
      status: 201,
      timestamp: new Date().toLocaleTimeString(),
      message: "CREATE buku success",
      buku_baru: req.body,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error,
    });
  }
};

const updateBuku = async (req, res) => {
  try {
    await BukuModel.updateBuku(req.params.id, req.body);
    res.status(200).json({
      status: 200,
      timestamp: new Date().toLocaleTimeString(),
      message: "UPDATE buku success",
      update_data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error,
    });
  }
};

const hapusBuku = async (req, res) => {
  try {
    await BukuModel.hapusBuku(req.params.id);
    res.status(200).json({
      status: 200,
      timestamp: new Date().toLocaleTimeString(),
      message: "DELETE buku success",
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error,
    });
  }
};

module.exports = {
  getBuku,
  buatBukuBaru,
  updateBuku,
  hapusBuku,
};
