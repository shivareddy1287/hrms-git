// const mongoose = require("mongoose");

// const dbConnect = async () => {
//   const MONGO_URI = `mongodb+srv://shivamern:shivamern123@mern-stack-app.9sont2b.mongodb.net/?retryWrites=true&w=majority`;
//   try {
//     await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
//     console.log("Database connected successfully");
//   } catch (error) {
//     console.log("Error while connecting with the database ", error.message);
//   }
// };

// module.exports = dbConnect;

const mongoose = require("mongoose");

const DBConnection = async () => {
  // const USERNAME = process.env.DB_USERNAME;
  // const PASSWORD = process.env.DB_PASSWORD;

  const MONGO_URI = `mongodb://hrms:h3eyL76I3jEQOKjC@ac-cox7ukk-shard-00-00.zzzzsgr.mongodb.net:27017,ac-cox7ukk-shard-00-01.zzzzsgr.mongodb.net:27017,ac-cox7ukk-shard-00-02.zzzzsgr.mongodb.net:27017/?ssl=true&replicaSet=atlas-gozuzz-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error.message);
  }
};

module.exports = DBConnection;
