const app = require("./app");

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000");
// });

// ==============================Підключення mongoose====
// tj4Z6xFsH7u9ensa
const mongoose = require("mongoose");
// const { DB_HOST } = require("./config");
const { DB_HOST } = process.env;

mongoose.set("strictQuery", true);
console.log(process.env.DB_HOST);
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
