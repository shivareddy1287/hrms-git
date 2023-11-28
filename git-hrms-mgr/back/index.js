const express = require("express");
const DBConnection = require("./config/db/dbConnect");
const cors = require("cors");

const dotenv = require("dotenv");
const userRoutes = require("./route/users/usersRoute");

const { errorHandler, notFound } = require("./middlewares/error/errorHandler");
const assetRoutes = require("./route/asset/assetRoute");
const benfitRoutes = require("./route/benefit/benefitRoute");
const exitDetailsRoute = require("./route/exitDetails/exitDetailsRoute");
const DepartmentRoutes = require("./route/department/departmentRoute");
const DesignationRoutes = require("./route/designation/designationRoute");
const TasksGivenRoutes = require("./route/TasksGiven/TasksGivenRoute");
const TeamRoutes = require("./route/team/teamRoute");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
// // custom middleware
// const logger = (req, res, next) => {
//   console.log("Am a logger");
//   next();
// };

// // 2. usage
// app.use(logger);

// uses routes

app.use("/api/users", userRoutes);
app.use("/api/asset", assetRoutes);
app.use("/api/benefit", benfitRoutes);
app.use("/api/exitdetails", exitDetailsRoute);
app.use("/api/designation", DesignationRoutes);
app.use("/api/department", DepartmentRoutes);
app.use("/api/team", TeamRoutes);
app.use("/api/tasksgiven", TasksGivenRoutes);

// DB

DBConnection();

// Register

// Login

// app.post("/api/users/login", (req, res) => {
//   // Business Logic
//   res.json({ user: "User Login" });
// });

// Fetch all users

app.get("/api/users", (req, res) => {
  // Business Logic
  res.json({ user: "Fetch all users" });
});

// console.log(process.env);

// dbConnect();

// err handler
app.use(notFound);
app.use(errorHandler);

// server

app.listen(PORT, console.log(`Server is running on ${PORT}`));

// vcNuP3lJc8FGedGx
