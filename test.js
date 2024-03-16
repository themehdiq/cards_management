let testArray = [
  {
    id: 1,
    title: "Black Swan",
    author: "Nassim Nicholas Taleb",
    description: "About Black Swan",
    price: 10,
    cover: "Soft Cover",
  },
  {
    id: 2,
    title: "Fooled by Randomness",
    author: "Nassim Nicholas Taleb",
    description: "Understanding Randomness",
    price: 12,
    cover: "Hard Cover",
  },
  {
    id: 3,
    title: "Antifragile",
    author: "Nassim Nicholas Taleb",
    description: "How to Benefit from Chaos",
    price: 15,
    cover: "Soft Cover",
  },
  {
    id: 4,
    title: "The Black Swan: Second Edition",
    author: "Nassim Nicholas Taleb",
    description: "Revised Edition of Black Swan",
    price: 20,
    cover: "Hard Cover",
  },
  {
    id: 5,
    title: "Skin in the Game",
    author: "Nassim Nicholas Taleb",
    description: "Hidden Asymmetries in Daily Life",
    price: 18,
    cover: "Soft Cover",
  },
  {
    id: 6,
    title: "Dynamic Hedging",
    author: "Nassim Nicholas Taleb",
    description: "Managing Vanilla and Exotic Options",
    price: 25,
    cover: "Hard Cover",
  },
  {
    id: 7,
    title: "The Bed of Procrustes",
    author: "Nassim Nicholas Taleb",
    description: "Philosophical and Practical Aphorisms",
    price: 14,
    cover: "Soft Cover",
  },
  {
    id: 8,
    title: "Statistical Consequences of Fat Tails",
    author: "Nassim Nicholas Taleb",
    description: "Understanding Fat Tails in Data",
    price: 22,
    cover: "Hard Cover",
  },
  {
    id: 9,
    title: "Fooled by Randomness: Illustrated Edition",
    author: "Nassim Nicholas Taleb",
    description: "Understanding Randomness with Illustrations",
    price: 30,
    cover: "Hard Cover",
  },
  {
    id: 10,
    title: "The Incerto Box Set",
    author: "Nassim Nicholas Taleb",
    description: "Collection of Incerto Series",
    price: 80,
    cover: "Box Set",
  },
];

const ind = testArray.splice(7, 1);
// testArray[7].id = 8;
// testArray[8].id = 9;
for (let i = testArray.length - 1; i >= 7; i--) {
  testArray[i].id = testArray[i].id - 1;
}
console.log(testArray);
