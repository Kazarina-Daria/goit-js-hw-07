let liItems = document.querySelectorAll(".item");
console.log("Number of cathegories:", liItems.length);
liItems.forEach(item => {
let title = item.querySelector("h2").textContent;
let ulItems = item.querySelectorAll("ul li");
console.log("Cathegory :", title);
console.log("Elements :", ulItems.length);
});


