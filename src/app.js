const data = [
  {
    categoryName: "COFFEE FRAPPE",
    drinks: [
      {
        name: "COFFEE FRAPPE",
        sizes: [
          { size: "SMALL", price: "40" },
          { size: "Double", price: "50" },
        ],
      },
      {
        name: "CARAMEL COFFEE FRAPPE",
        sizes: [
          { size: "SMALL", price: "40" },
          { size: "Double", price: "50" },
        ],
      },
      {
        name: "MOCHA FRAPPE",
        sizes: [
          { size: "SMALL", price: "40" },
          { size: "Double", price: "50" },
        ],
      },
      {
        name: "WHITE MOCHA FRAPPE",
        sizes: [
          { size: "SMALL", price: "40" },
          { size: "Double", price: "50" },
        ],
      },
      {
        name: "TOFFEE CRUNCH FRAPPE",
        sizes: [
          { size: "SMALL", price: "40" },
          { size: "Double", price: "50" },
        ],
      },
    ],
  },
  {
    categoryName: "FREDDO",
    drinks: [
      {
        name: "ESPRESSO FREDDO",
        sizes: [
          { size: "SMALL", price: "40" },
          { size: "Double", price: "50" },
        ],
      },
      {
        name: "LATTE FREDDO",
        sizes: [
          { size: "SMALL", price: "40" },
          { size: "Double", price: "50" },
        ],
      },
      {
        name: "CAPPUCCINO FREDDO",
        sizes: [
          { size: "SMALL", price: "40" },
          { size: "Double", price: "50" },
        ],
      },
      {
        name: "SPANISH FREDDO",
        sizes: [
          { size: "SMALL", price: "40" },
          { size: "Double", price: "50" },
        ],
      },
      {
        name: "LATTE FREDDO",
        sizes: [
          { size: "SMALL", price: "40" },
          { size: "Double", price: "50" },
        ],
      },
      {
        name: "TEMPO FREDDO",
        sizes: [
          { size: "SMALL", price: "40" },
          { size: "Double", price: "50" },
        ],
      },
    ],
  },
  {
    categoryName: "NON-COFFEE FRAPPE",
    drinks: [
      {
        name: "CARAMEL FRAPPE",
        sizes: [
          { size: "SMALL", price: "40" },
          { size: "Double", price: "50" },
        ],
      },
      {
        name: "CHOCOLATE FRAPPE ",
        sizes: [
          { size: "SMALL", price: "40" },
          { size: "Double", price: "50" },
        ],
      },
      {
        name: "COTTON CANDY FRAPPE",
        sizes: [
          { size: "SMALL", price: "40" },
          { size: "Double", price: "50" },
        ],
      },
      {
        name: "BLUEBERRY FRAPPE",
        sizes: [
          { size: "SMALL", price: "40" },
          { size: "Double", price: "50" },
        ],
      },
      {
        name: "STRAWBERRY FRAPPE",
        sizes: [
          { size: "SMALL", price: "40" },
          { size: "Double", price: "50" },
        ],
      },
      {
        name: "ORIO FRAPPE",
        sizes: [
          { size: "SMALL", price: "40" },
          { size: "Double", price: "50" },
        ],
      },
    ],
  },
];

let CategoriesTabs = document.getElementById("categories_tabs");
let title = document.getElementById("title");

console.log(CategoriesTabs);
console.log(data);

//Create The Tabs On The Fly
data.forEach((element) => {
  let newLiElement = document.createElement("li");
  newLiElement.className = "text-center";
  let newButtonElement = document.createElement("button");
  newButtonElement.id = element.categoryName;

  newButtonElement.className =
    "inline-block p-3 shadow-md text-text transition duration-400 hover:text-primaryColor text-xs outline-none rounded-[24px]";
  newButtonElement.innerText = element.categoryName;
  newButtonElement.addEventListener("click", () => {
    createTheCards(element.categoryName);
    document.querySelectorAll("button").forEach((btn) => {
      btn.classList.remove("bg-text");
      btn.classList.remove("text-white");
      btn.classList.remove("hover:text-white");
    });
    newButtonElement.classList.add("bg-text");
    newButtonElement.classList.add("text-white");
    newButtonElement.classList.add("hover:text-white");
    addAnimation();
    title.scrollIntoView({ behavior: "smooth" });
  });

  newLiElement.appendChild(newButtonElement);
  CategoriesTabs.appendChild(newLiElement);
});

const createTheCards = (buttonId) => {
  let cardsContainer = document.getElementById("cards-container");

  cardsContainer.innerHTML = null;

  const currentCategory = data.find((item) => item.categoryName === buttonId);
  console.log(
    "🚀 ~ file: app.js:490 ~ createTheCards ~ currentCategory:",
    currentCategory
  );

  title.innerText = buttonId;

  currentCategory.drinks.forEach((drink, idx) => {
    //create the card for each drink in the category
    let newCardContainerElement = document.createElement("div");
    newCardContainerElement.className = "flex justify-center";
    let newCardElement = document.createElement("div");
    newCardElement.className =
      "flex flex-col justify-center items-center h-[390px] w-[80%] pt-4 rounded-[32px] text-center transition duration-500 custom-hidden text-white relative overflow-hidden";

    if (idx % 3 === 0) {
      newCardElement.classList.add("gradient4");
    } else if (idx % 2 === 0) {
      newCardElement.classList.add("gradient5");
    } else {
      newCardElement.classList.add("gradient6");
    }

    let title = document.createElement("h1");
    title.className = "text-lg tracking-widest w-full absolute top-12";
    title.innerText = drink.name;
    newCardElement.appendChild(title);

    let pricesContainer = document.createElement("div");
    pricesContainer.className =
      "absolute bottom-0 right-0  text-black w-full h-2/5 rounded-tl-full flex justify-center items-center flex-col p-4";

    drink.sizes.forEach((size) => {
      let priceRow = document.createElement("div");
      priceRow.className = "flex gap-4";
      let sizeName = document.createElement("span");
      sizeName.className = "text-white text-lg ";
      sizeName.innerText = size.size;
      let price = document.createElement("span");
      price.className = "text-white text-lg";

      price.innerText = `${size.price} EGP`;

      priceRow.appendChild(sizeName);
      priceRow.appendChild(price);
      pricesContainer.appendChild(priceRow);
    });
    newCardElement.appendChild(pricesContainer);

    newCardContainerElement.appendChild(newCardElement);
    cardsContainer.appendChild(newCardContainerElement);
  });
};

createTheCards(data[0].categoryName);

const addAnimation = () => {
  const hiddenElements = document.querySelectorAll(".custom-hidden");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  hiddenElements.forEach((el) => observer.observe(el));
};

addAnimation();

console.log(window.scrollY);
