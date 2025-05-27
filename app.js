const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 109,
        colors: [
            { code: "black", img: "./img/product/air.png" },
            { code: "darkblue", img: "./img/product/air2.png" },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 139,
        colors: [
            { code: "lightgray", img: "./img/product/jordan.png" },
            { code: "green", img: "./img/product/jordan2.png" },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 99,
        colors: [
            { code: "lightgray", img: "./img/product/blazer.png" },
            { code: "green", img: "./img/product/blazer2.png" },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 119,
        colors: [
            { code: "black", img: "./img/product/crater.png" },
            { code: "lightgray", img: "./img/product/crater2.png" },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 159,
        colors: [
            { code: "gray", img: "./img/product/hippie.png" },
            { code: "black", img: "./img/product/hippie2.png" },
        ],
    },
    {
        id: 6,
        title: "Killshot",
        price: 1159,
        colors: [
            { code: "blue", img: "./img/product/killshot.png" },
            { code: "yellow", img: "./img/product/killshot2.png" },
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

if (currentProductImg && currentProductTitle && currentProductPrice) {
    // Set initial product values
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "RM" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    currentProductColors.forEach((color, index) => {
        if (choosenProduct.colors[index]) {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        } else {
            color.style.backgroundColor = "transparent";
        }
    });
}

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // Change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // Update chosen product
        choosenProduct = products[index];

        // Update UI with product details
        if (currentProductImg && currentProductTitle && currentProductPrice) {
            currentProductTitle.textContent = choosenProduct.title;
            currentProductPrice.textContent = "RM" + choosenProduct.price;
            currentProductImg.src = choosenProduct.colors[0].img;

            // Update color options
            currentProductColors.forEach((color, idx) => {
                if (choosenProduct.colors[idx]) {
                    color.style.backgroundColor = choosenProduct.colors[idx].code;
                } else {
                    color.style.backgroundColor = "transparent";
                }
            });
        }
    });
});

// Color change handler
currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        if (choosenProduct.colors[index]) {
            currentProductImg.src = choosenProduct.colors[index].img;
        }
    });
});

// Size selection handler
currentProductSizes.forEach((size) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((s) => {
            s.style.backgroundColor = "white";
            s.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

// Payment modal logic
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

if (productButton && payment && close) {
    productButton.addEventListener("click", () => {
        payment.style.display = "flex";
    });

    close.addEventListener("click", () => {
        payment.style.display = "none";
    });
}

// Submit button