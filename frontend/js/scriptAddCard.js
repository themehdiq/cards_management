const addCardButton = document.getElementById("add-card");
const titleBook = document.getElementById("titleBook");
const descBook = document.getElementById("descBook");
const authorBook = document.getElementById("authBook");
const priceBook = document.getElementById("priceBook");
const coverBook = document.getElementById("coverBook");

// const api = "http://localhost:1000/books";

async function handleSubmit(e) {
  e.preventDefault();

  const cardData = {
    title: titleBook.value,
    author: authorBook.value,
    description: descBook.value,
    price: priceBook.value,
    cover: coverBook.value,
  };

  await fetch(`http://localhost:1000/books/`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cardData),
  });
}

addCardButton.addEventListener("click", handleSubmit);
