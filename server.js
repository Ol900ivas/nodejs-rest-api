const app = require("./app");

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000");
// });

// ==============================Підключення mongoose====
// tj4Z6xFsH7u9ensa
const mongoose = require("mongoose");
const DB_HOST =
  "mongodb+srv://Olga:tj4Z6xFsH7u9ensa@cluster0.yjv8jva.mongodb.net/db-contacts?retryWrites=true&w=majority";
mongoose.set("strictQuery", true);

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
