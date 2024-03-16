const id = new URLSearchParams(window.location.search).get("id");

const titleInput = document.getElementById("titleBook");
const authorInput = document.getElementById("authBook");
const descInput = document.getElementById("descBook");
const priceInput = document.getElementById("priceBook");
const coverInput = document.getElementById("coverBook");
const updateForm = document.getElementById("form-id");
const buttonModify = document.getElementById("btn-modify");

const response = await fetch(`http://localhost:1000/books/${id}`);
const data = await response.json();
// console.log(data);

titleInput.value = data.title;
authorInput.value = data.author;
descInput.value = data.description;
priceInput.value = data.price;
coverInput.value = data.cover;

async function bookData(e) {
  e.preventDefault();
  const book = {
    title: titleInput.value,
    author: authorInput.value,
    description: descInput.value,
    price: priceInput.value,
    cover: coverInput.value,
  };
  console.log("before");
  try {
    const response2 = await fetch(`http://localhost:1000/books/${data.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });
    console.log(response2);
    console.log(response2.ok);
  } catch (error) {
    console.log("something wrong");
  }
}
// bookData();
buttonModify.addEventListener("click", bookData);

// window.addEventListener("DOMContentLoaded", () => bookData);
