const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
// Store cart items in local storage
const cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productName, productPrice) {
  cart.push({ name: productName, price: parseFloat(productPrice) });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = cart.length;
}
document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  document.getElementById("total-price").textContent = `$${total}`;
});

// Language translations
const translations = {
  en: {
    siteTitle: "Stop & Shop",
    homeButton: "Home",
    hButtonRes: "Home",
    shopButton: "Shop",
    sButtonRes: "Shop",
    pageTitle: "Welcome to Stop & Shop",
    description: "Find the best products here.",
    shopNowButton: "Shop Now",
    productHeading: "Products",

    addToCart: "Add to Cart",
    addToCart1: "Add to Cart",
    addToCart2: "Add to Cart",
    addToCart3: "Add to Cart",
    addToCart4: "Add to Cart",
    addToCart5: "Add to Cart",
    addToCart6: "Add to Cart",
    addToCart7: "Add to Cart",

    paymentHeading: "Payment",
    firstName: "First Name",

    thankYou: "Thank You for Your Purchase!",

    // Add more text translations here
  },
  km: {
    siteTitle: "ស្តុប & ហ្សុប",
    homeButton: "ទំព័រដេីម",
    hButtonRes: "ទំព័រដេីម",
    shopButton: "ហាង",
    sButtonRes: "ហាង",
    pageTitle: "សូមស្វាគមន៍មកកាន់ Stop & Shop",
    description: "ស្វែងរកផលិតផលល្អបំផុតនៅទីនេះ",
    shopNowButton: "ទិញឥឡូវនេះ",
    productHeading: "ទំនិញ",

    addToCart: "បញ្ចូលទៅក្នុងកន្លែងគិតលុយ",
    addToCart1: "បញ្ចូលទៅក្នុងកន្លែងគិតលុយ",
    addToCart2: "បញ្ចូលទៅក្នុងកន្លែងគិតលុយ",
    addToCart3: "បញ្ចូលទៅក្នុងកន្លែងគិតលុយ",
    addToCart4: "បញ្ចូលទៅក្នុងកន្លែងគិតលុយ",
    addToCart5: "បញ្ចូលទៅក្នុងកន្លែងគិតលុយ",
    addToCart6: "បញ្ចូលទៅក្នុងកន្លែងគិតលុយ",
    addToCart7: "បញ្ចូលទៅក្នុងកន្លែងគិតលុយ",

    paymentHeading: "ការទូទាត់",
    firstName: "នាមត្រកូល",

    thankYou: "អគុណសម្រាប់ការទិញ!",

    // Add more Khmer translations here
  },
};

// Initialize language based on localStorage or default to English
function initLanguage() {
  const savedLanguage = localStorage.getItem("language") || "en";
  changeLanguage(savedLanguage);
}

// Function to change language
function changeLanguage(language) {
  localStorage.setItem("language", language); // Store language in localStorage

  // Update text elements on the page
  document.getElementById("site-title").textContent =
    translations[language].siteTitle;
  document.getElementById("home-button").textContent =
    translations[language].hButtonRes;
  document.getElementById("hbutton-res").textContent =
    translations[language].homeButton;
  document.getElementById("shop-button").textContent =
    translations[language].shopButton;
  document.getElementById("sbutton-res").textContent =
    translations[language].sButtonRes;
  document.getElementById("page-title").textContent =
    translations[language].pageTitle;
  document.getElementById("description").textContent =
    translations[language].description;
  document.getElementById("product-heading").textContent =
    translations[language].productHeading;
  document.getElementById("shopnow-button").textContent =
    translations[language].shopNowButton;

  document.getElementById("add-to-cart").textContent =
    translations[language].addToCart;
  document.getElementById("add-to-cart1").textContent =
    translations[language].addToCart1;
  document.getElementById("add-to-cart2").textContent =
    translations[language].addToCart2;
  document.getElementById("add-to-cart3").textContent =
    translations[language].addToCart3;
  document.getElementById("add-to-cart4").textContent =
    translations[language].addToCart4;
  document.getElementById("add-to-cart5").textContent =
    translations[language].addToCart5;
  document.getElementById("add-to-cart6").textContent =
    translations[language].addToCart6;
  document.getElementById("add-to-cart7").textContent =
    translations[language].addToCart7;

  document.getElementById("payment-heading").textContent =
    translations[language].paymentHeading;
  document.getElementById("firstname").textContent =
    translations[language].firstName;
  document.getElementById("thank-you").textContent =
    translations[language].thankYou;

  // Add logic to update more text content on other pages here
}

// Language selector event listener
document.getElementById("language-select").addEventListener("change", (e) => {
  changeLanguage(e.target.value);
});

document.addEventListener("DOMContentLoaded", updateCartCount);
// Initialize language on page load
document.addEventListener("DOMContentLoaded", initLanguage);
