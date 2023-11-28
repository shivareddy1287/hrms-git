const express = require("express");

const authMiddleware = require("../../middlewares/auth/authMiddleware");

const {
  createTeamCtrl,
  fetchTeamsCtrl,
  fetchSingleTeam,
  updateTeamCtrl,
  deleteTeamCtrl,
} = require("../../controllers/team/teamCtrl");

const TeamRoutes = express.Router();
TeamRoutes.post("/create", createTeamCtrl);
TeamRoutes.get("/fetch", fetchTeamsCtrl);
TeamRoutes.get("/fetch/:id", fetchSingleTeam);
TeamRoutes.put("/update/:id", updateTeamCtrl);
TeamRoutes.delete("/fetch/:id", deleteTeamCtrl);
module.exports = TeamRoutes;
