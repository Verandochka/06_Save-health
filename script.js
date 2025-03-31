const arrayOfhealthWishers = [
  "Rest well – Give your body the time it needs to heal.",
  "Stay hydrated – Drink water regularly to support recovery.",
  "Eat nutritious foods – Include vitamins and minerals to strengthen your body.",
  "Listen to your body – Avoid overexerting yourself and take breaks when needed.",
  "Stay positive – A positive mindset boosts the healing process.",
  "Keep moving gently – Light stretching or walking helps circulation.",
  "Follow your doctor’s advice – Stick to prescribed treatments and medications.",
  "Limit stress – Stress can hinder recovery, so try to stay calm.",
  "Avoid unhealthy habits – Limit alcohol, smoking, or junk food while recovering.",
  "Stay patient – Healing takes time, so be kind to yourself during the process.",
];

let countOfpills = 5;
document.getElementById("count-of-tablets").innerText = "💊".repeat(
  countOfpills
);
document.getElementById("btn_health_wishes").addEventListener("click", () => {
  let index = Math.floor(Math.random() * arrayOfhealthWishers.length);
  document.getElementById("p-health-wishes").innerText =
    arrayOfhealthWishers[index];

  countOfpills--;
  console.log(countOfpills);
  document.getElementById("count-of-tablets").innerText =
    "💊".repeat(countOfpills) + "❌".repeat(5 - countOfpills);
  console.log("💊".repeat(countOfpills) + "❌".repeat(5 - countOfpills));
  if (countOfpills === 0) {
    console.log("countOfpills = 0");
    document.getElementById("btn_health_wishes").style.display = "none";
  }
});

document.getElementById("btn-byu-tablets").addEventListener("click", () => {
  countOfpills = 5;
  console.log(countOfpills);
  document.getElementById("count-of-tablets").innerText = "💊".repeat(
    countOfpills
  );
  document.getElementById("btn_health_wishes").style.display = "inline-block";
});

const arrayOfImages = ["1.jpg", "2.jpg", "3.jpg"];

let galleryImage = 1;

document
  .getElementById("main-image")
  .setAttribute("src", `img/gallery/${arrayOfImages[galleryImage - 1]}`);

document.getElementById("right-arrow").addEventListener("click", () => {
  galleryImage++;
  console.log(galleryImage);

  if (galleryImage == arrayOfImages.length + 1) galleryImage = 1;

  document
    .getElementById("main-image")
    .setAttribute("src", `img/gallery/${arrayOfImages[galleryImage - 1]}`);
});

document.getElementById("left-arrow").addEventListener("click", () => {
  galleryImage--;
  console.log(galleryImage);

  if (galleryImage == 0) galleryImage = 3;

  document
    .getElementById("main-image")
    .setAttribute("src", `img/gallery/${arrayOfImages[galleryImage - 1]}`);
});

const arrayOfVitamins = [
  {
    id: 1,
    title: "Вітамін В3",
    photo: "vitamin.png",
    description:
      "Нікоти́нова кислота — розчинний у воді вітамін; необхідний для багатьох реакцій окиснення у живих клітинах.",
    rating: 5,
    type: "",
  },
  {
    id: 2,
    title: "Вітамін С3",
    photo: "vitamin-c.png",
    description: "",
    rating: 2,
    type: "",
  },
  {
    id: 3,
    title: "Омега",
    photo: "omega.png",
    description: "",
    rating: 5,
    type: "",
  },
  {
    id: 4,
    title: "Магній B5",
    photo: "b5.png",
    description: "",
    rating: 3,
    type: "",
  },
  {
    id: 5,
    title: "D3",
    photo: "vitamin-d.png",
    description: "",
    rating: 4,
    type: "",
  },
];

//console.log(arrayOfVitamins)

arrayOfVitamins.forEach((item, index) => {
  // console.log("елемент №",index,item)

  let divVitamin = document.createElement("div");
  divVitamin.classList.add("vitamin");

  document.getElementById("p-vitamins").appendChild(divVitamin);

  divVitamin.innerHTML = `
       <span>${item.id}</span>
       <h3>${item.title}</h3>
       <hr>
          <img src="img/vitamins/${item.photo}" alt="">
          <p>${item.description}</p>
          <span>${"❤".repeat(item.rating) + "😂".repeat(5 - item.rating)}</span>
          <p>type</p>
            `;
});
