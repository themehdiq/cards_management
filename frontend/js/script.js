// import "./frontend/style.css";
const body = document.querySelector("body");

async function logData() {
  const response = await fetch("http://localhost:1000/books");
  const data = await response.json();
  console.log(data);
  data.forEach((element) => {
    const card = document.createElement("div");

    card.classList.add("myCard");

    card.innerHTML = `
      <h3>${element.title}</h3>
      <h3>Author : ${element.author}</h3>
      <p>Description : ${element.description}</p>
      <p>Price : ${element.price}</p>
      <p>Cover : ${element.cover}</p>
      
      <button class="btn-delete">Delete</button>
      <a
      class="btn-modify"
      href="updateCard.html?id=${element.id}"
      >Modify</a
    > 
      `;
    const btnDelete = card.querySelector(".btn-delete");
    btnDelete.addEventListener("click", async () => {
      await fetch(`http://localhost:1000/books/${element.id}`, {
        method: "delete",
      });
      card.remove();
    });

    body.appendChild(card);
  });
}

logData();
