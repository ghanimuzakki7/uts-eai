const PenerbitModel = require("../models/penerbit");

const getSemuaPenerbit = async (req, res) => {
  try {
    const [penerbit] = await PenerbitModel.getSemuaPenerbit();
    res.status(200).json({
      status: 200,
      timestamp: new Date().toLocaleTimeString(),
      message: "GET penerbit success",
      penerbit,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error,
    });
  }
};

const buatPenerbitBaru = async (req, res) => {
  const penerbit = req.body.penerbit;
  try {
    await PenerbitModel.buatPenerbitBaru(penerbit);
    res.status(200).json({
      status: 201,
      timestamp: new Date().toLocaleTimeString(),
      message: "CREATE penerbit success",
      penerbitBaru: req.body.penerbit,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error,
    });
  }
};

module.exports = {
  getSemuaPenerbit,
  buatPenerbitBaru,
};
