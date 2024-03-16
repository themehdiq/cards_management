const express = require("express");
const app = express();
const PORT = 1000;
const booksRouter = require("./router/books.js");
const cors = require("cors");

// app.use(express.urlencoded({ extended: true }));

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500"); // Update this to your frontend URL
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use(cors());

app.use(express.json());

app.use("/books", booksRouter);

app.listen(PORT, () => {
  console.log(`App listening now on http://localhost:${PORT}`);
});
