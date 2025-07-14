
const a = document.querySelectorAll(".utilities-container h4")
// a.forEach(e => e.setAttribute("class","text-danger"));
a[0].setAttribute("class", "text-danger")
console.log(a);



const b = document.querySelectorAll(".bestseller-container2 img")

b.forEach(e => e.setAttribute("src", "https://img.freepik.com/premium-photo/banana-bunch-isolated_88281-1027.jpg?ga=GA1.1.1583188076.1743503990&semt=ais_items_boosted&w=740"))

console.log(b);


const c = document.querySelector(".bestseller-container1 .row")

const container = [
    {
        name: "Blaud",
        img: "https://img.freepik.com/free-photo/delicious-red-apples-studio_23-2150811013.jpg?ga=GA1.1.1583188076.1743503990&semt=ais_items_boosted&w=740",
        price: "120"
    },
    {
        name: "Fresha",
        img: "https://img.freepik.com/free-photo/fresh-strawberries-white-bowl_144627-25338.jpg?w=740&t=st=1716979203~exp=1716979803~hmac=6ac3c7c0212a64004bdf0ec64614b8be55370cf8cb874b6507f014d2e31ea443",
        price: "95"
    },
    {
        name: "Citrona",
        img: "https://img.freepik.com/free-photo/front-view-lemons-with-half-one_176474-3547.jpg?w=740&t=st=1716979301~exp=1716979901~hmac=ddbe87291d18ebf1b3db43d1b9a0e3f17f3472f4e1470104ad060e8d72e0b926",
        price: "75"
    },
    {
        name: "Mangozo",
        img: "https://img.freepik.com/free-photo/front-view-fresh-mangoes-yellow-surface-fruit-tree-color_140725-144894.jpg?w=740&t=st=1716979334~exp=1716979934~hmac=84913e38ec05cdcc56de5885b1aafc487e227cba88c7030f3fa91880ae617fa5",
        price: "150"
    },
    {
        name: "Bananix",
        img: "https://img.freepik.com/free-photo/bunch-bananas-isolated-white_93675-129676.jpg?w=740&t=st=1716979364~exp=1716979964~hmac=fd9010bfb9a57e95b17088bd1b3fc5a369404f8a38d38d79144d8e53bc7a2ee2",
        price: "60"
    },
    {
        name: "Grapezio",
        img: "https://img.freepik.com/free-photo/grapes-bunch-table_144627-51197.jpg?w=740&t=st=1716979392~exp=1716979992~hmac=444e1c9b9f12cabc6f2c84dbd2df46dd6228f6c96a8d544fa14b86b7a859305f",
        price: "110"
    }
];

container.forEach(e => {
    c.innerHTML += `   <div class="col">
          <div class="card text-center p-3 shadow-sm h-100 d-flex flex-row align-items-center">
            <div class="prcard-img"><img src=${e.img}
                class="rounded-circle mx-auto mb-3" style="width: 150px; height: 150px;" alt="Product"></div>
            <div class="prdcard-info">
              <h5 class="card-title">${e.name}</h5>
              <div class="mb-2 text-success">
                ★★★★☆
              </div>
              <p class="fw-bold">${e.price} $</p>
              <button class="btn btn-outline-warning text-success fw-bold rounded-pill">
                <i class="fa-solid fa-bag-shopping"></i>
                <i class="bi bi-lock-fill me-1"></i> Add to cart
              </button>
            </div>

          </div>
        </div>`
})
console.log(c);

function maudo() {
    const i = document.querySelectorAll(".vegetable-container .badge")
}

function trolai(){
    const i = document.querySelectorAll(".vegetable-container .badge")
    i.forEach(e =>e.classList.toggle("bg-danger"))
}

const addRed = document.getElementById("btn-2")
addRed.addEventListener("click", trolai)

const return1 = document.getElementById("btn-1")
return1.addEventListener("click", trolai)