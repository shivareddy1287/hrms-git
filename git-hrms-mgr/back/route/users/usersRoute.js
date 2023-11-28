const express = require("express");
const {
  loginUserCtrl,
  userRegisterCtrl,
  fetchUsersCtrl,
  fetchUserDetails,
  updateUserctrl,
  deleteProfileCtrl,
  newHiresFetchCtrl,
  forgotPassword,
  resetPassword,
  changePassword,
  sendAutomatedEmail,
  fetchManagersData,
} = require("../../controllers/users/usersCtrl");
const authMiddleware = require("../../middlewares/auth/authMiddleware");

const userRoutes = express.Router();

userRoutes.post("/register", userRegisterCtrl);
userRoutes.post("/login", loginUserCtrl);
userRoutes.get("/", fetchUsersCtrl);

userRoutes.get("/:id", fetchUserDetails);
userRoutes.put("/update/:id", updateUserctrl);
userRoutes.delete("/delete/:id", deleteProfileCtrl);
userRoutes.get("/new/hires", newHiresFetchCtrl);
userRoutes.post("/forgotPassword", forgotPassword);
userRoutes.post("/resetPassword/:resetToken", resetPassword);
userRoutes.patch("/changePassword", authMiddleware, changePassword);
userRoutes.post("/sendAutomatedEmail", sendAutomatedEmail);
userRoutes.get("/manager/data", fetchManagersData);

module.exports = userRoutes;
