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
      <h3>title: ${element.title}</h3>
      <h3>author : ${element.author}</h3>
      <h5>description : ${element.description}</h5>
      <h5>price : ${element.price}</h5>
      <h5>cover : ${element.cover}</h5>
      
      <button class="btn-delete">delete</button>
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
