const express = require("express");
const router = express.Router();
const LiaisonController = require("../Controllers/LiaisonController");

router.get("/all", LiaisonController.getAll);
router.get("/dg", LiaisonController.getAllSitesDG);
router.get("/com", LiaisonController.getAllSitesCOM);
router.get("/cbr", LiaisonController.getAllSitesCBR);
router.get("/gpl", LiaisonController.getAllSitesGPL);
router.get("/liaison", LiaisonController.getAllLiaison);
router.get("/wilaya", LiaisonController.getAllWilaya);
router.get("/try", LiaisonController.getTry);
router.get("/One", LiaisonController.getOne);
router.get("/mob", LiaisonController.getMobilis);
router.get("/oor", LiaisonController.getOoredeoo);
router.post("/site", LiaisonController.AddSite);
router.delete("/site/:id", LiaisonController.deleteSite);
router.put("/site/:id", LiaisonController.updateLiaison);
router.delete("/site", LiaisonController.deleteAll);
module.exports = router;
