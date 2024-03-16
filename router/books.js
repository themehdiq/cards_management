const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data.json");
// console.log(dataPath);

let books = [];

fs.readFile(dataPath, "utf-8", (err, jsonString) => {
  if (err) {
    console.log(err);
  } else {
    try {
      books = JSON.parse(jsonString);
    } catch (err) {
      console.log("Error parsing data", err);
    }
  }
});

/**
 *  @desc Get all books
 *  @route /books/
 *  @method GET
 *  @access public
 */
// get all books
router.get("/", (req, res) => {
  res.status(200).json(books);
});

/**
 *  @desc Get book by id
 *  @route /books/:id
 *  @method GET
 *  @access public
 */
// get book by id
router.get("/:id", (req, res) => {
  const book = books.find((element) => element.id === parseInt(req.params.id));

  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: "book not found" }); // 404 server error
  }
});

/**
 *  @desc Get book by id
 *  @route /books/
 *  @method POST
 *  @access public
 */
// create new books
router.post("/", (req, res) => {
  let book = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    price: req.body.price,
    cover: req.body.cover,
  };
  books.push(book);

  fs.writeFile(dataPath, JSON.stringify(books, null, 2), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File successfully wtitten !");
    }
  });
  res.status(200).json(book);
});

/**
 *  @desc update a book by id
 *  @route /books/id/body
 *  @method PUT
 *  @access public
 */
// update books by id
router.put("/:id", (req, res) => {
  const bookId = parseInt(req.params.id);

  const bookIndex = books.findIndex((element) => element.id === bookId);

  if (bookIndex !== -1) {
    if (req.body.title) {
      books[bookIndex].title = req.body.title;
    }
    if (req.body.author) {
      books[bookIndex].author = req.body.author;
    }
    if (req.body.description) {
      books[bookIndex].description = req.body.description;
    }
    if (req.body.price) {
      books[bookIndex].price = req.body.price;
    }
    if (req.body.cover) {
      books[bookIndex].cover = req.body.cover;
    }
    fs.writeFile(dataPath, JSON.stringify(books, null, 2), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File successfully wtitten !");
      }
    });
    res.status(200).json(books);
  } else {
    res.status(404).send({ message: "book not found !" });
  }
});

/**
 *  @desc delete a book by id
 *  @route /books/id
 *  @method DELETE
 *  @access public
 */
// delete books
router.delete("/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  // console.log(typeof(bookId));

  const bookIndex = books.findIndex((element) => element.id === bookId);

  if (bookIndex !== -1) {
    const book = books.splice(bookIndex, 1);
    for (let i = books.length - 1; i >= bookIndex; i--) {
      books[i].id = books[i].id - 1;
    }
    fs.writeFile(dataPath, JSON.stringify(books, null, 2), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File successfully wtitten !");
      }
    });
    res.status(200).json({ message: "deleted" });
  } else {
    res.status(404).json({ message: "index not found" });
  }
});

module.exports = router;
