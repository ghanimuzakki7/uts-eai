const express = require("express");
const UserController = require("../controller/user");
const PenerbitController = require("../controller/penerbit");
const BukuController = require("../controller/buku");
const middlewareKey = require("../middleware/key");
const router = express.Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);

router.get("/penerbit", middlewareKey, PenerbitController.getSemuaPenerbit);
router.post("/penerbit", middlewareKey, PenerbitController.buatPenerbitBaru);

router.get("/buku/", middlewareKey, BukuController.getBuku);
router.post("/buku", middlewareKey, BukuController.buatBukuBaru);
router.patch("/buku/:id", middlewareKey, BukuController.updateBuku);
router.delete("/buku/:id", middlewareKey, BukuController.hapusBuku);

module.exports = router;
