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
  .getElementById('main-image')
  .setAttribute("src", `../img/gallery/${arrayOfImages[galleryImage - 1]}`);

document.getElementById('right-arrow').addEventListener("click", () => {
  galleryImage++;
  console.log(galleryImage);

  if (galleryImage == arrayOfImages.length + 1) galleryImage = 1;

  document
    .getElementById('main-image')
    .setAttribute("src", `../img/gallery/${arrayOfImages[galleryImage - 1]}`);
});

document.getElementById('left-arrow').addEventListener("click", () => {
  galleryImage--;
  console.log(galleryImage);

  if (galleryImage == 0) galleryImage = 3;

  document
    .getElementById("main-image")
    .setAttribute("src", `../img/gallery/${arrayOfImages[galleryImage - 1]}`);
});

//console.log(arrayOfVitamins)

fetch('js/vitamins.json')
.then(Response => Response.json())
.then(data => {
  data.forEach((item, index) => {

    let divVitamin = document.createElement('div')
    divVitamin.classList.add('vitamin')

    let allVitamins = [];

fetch('js/vitamins.json')
  .then(response => response.json())
  .then(data => {
    allVitamins = data;
    renderVitamins(allVitamins); // Показати всі при завантаженні
  })
  .catch(error => {
    console.error('Помилка при завантаженні json:', error);
  });

    function renderVitamins(vitamins) {
      const container = document.getElementById("p-vitamins");
      container.innerHTML = ""; // Очистити
    
      vitamins.forEach((item) => {
        let divVitamin = document.createElement("div");
        divVitamin.classList.add("vitamin");

        divVitamin.innerHTML = `
        <p>${item.id}</p>
        <h3>${item.title}</h3>
        <hr>
       <img src="../img/vitamins/${item.photo}" class="vitamin-logo" alt="Картинка для ${item.title}" onerror="this.onerror=null; this.src='img/vitamins/default.png';">
        <p>${item.description}</p>
        <div>
<img src="../img/scheme/${item.scheme}" alt="Схема для ${item.title}" onerror="this.onerror=null; this.src='img/scheme/schema.png';" >          <p>${"❤".repeat(item.rating) + "😂".repeat(5 - item.rating)}</p>
          <p>${item.type}</p>
        </div>
      `;
  
      container.appendChild(divVitamin);
    });
  }

  document.getElementById("vitamin-filter").addEventListener("change", (e) => {
    const selectedType = e.target.value;
    
    if (selectedType === "all") {
      renderVitamins(allVitamins);
    } else {
      const filtered = allVitamins.filter(v => v.type === selectedType);
      renderVitamins(filtered);
    }
  });

  divVitamin.innerHTML = `
       <p>${item.id}</p>
       <h3>${item.title}</h3>
       <hr>
          <img src="../img/vitamins/${item.photo}" class="vitamin-logo" alt="Картинка для ${item.title}" onerror="this.onerror=null; this.src='img/vitamins/default.png';">
          <p>${item.description}</p>

          <div>
                    <img src="../img/scheme/${item.scheme}" alt="Схема для ${item.title}" onerror="this.onerror=null; this.src='img/scheme/schema.png';" >
                    <p>${

                      "❤".repeat(item.rating) + "😂".repeat(5 - item.rating)
                    }</p>
          <p>${item.type}</p>
          </div>
            `
            document.getElementById("p-vitamins").appendChild(divVitamin);
})
})

.catch(error => {
  console.error('Помилка при завантаженні json:', error);
});