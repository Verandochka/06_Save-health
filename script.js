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

  let galleryImage=1

  document.getElementById("main-image").setAttribute('src','img/gallery/${galleryImage}.jpg')

  document.getElementById("right-arrow").addEventListener('click',()=>{
    galleryImage++
    console.log(galleryImage)

    if(galleryImage == 4) galleryImage = 1

    document.getElementById("main-image").setAttribute('src','img/gallery/${galleryImage}.jpg')
  })