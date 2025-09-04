document.addEventListener("DOMContentLoaded", () => {
  const productsContainer = document.querySelector(".products");
  const viewAllBtn = document.querySelector(".view-all-link");

  let isExpanded = false;

  const createProductCard = (product) => {
    const {
      name,
      price,
      oldPrice,
      isSellingFast,
      isSoldOut,
      isDiscount,
      imageUrl,
      imageUrl2x,
    } = product;

    let labels = "";
    if (isSellingFast) labels += `<span class="label selling-fast">SELLING FAST</span>`;
    if (isDiscount) {
      const shiftClass = isSellingFast ? "shifted" : "";
      labels += `<span class="label discount ${shiftClass}">20% OFF</span>`;
    }
    if (isSoldOut) labels += `<span class="label sold-out">SOLD OUT</span>`;

    const hasOldPrice = oldPrice !== null && oldPrice !== undefined;
    const priceClass = hasOldPrice ? "price discounted" : "price";

    const priceHtml = hasOldPrice
      ? `<span class="${priceClass}">$${price}</span> <span class="old-price">$${oldPrice}</span>`
      : `<span class="${priceClass}">$${price}</span>`;

    const soldOutClass = isSoldOut ? "sold-out-card" : "";

    return `
      <div class="product-card ${soldOutClass}">
        <div class="product-image-wrapper">
          ${labels}
          <img 
            src="${imageUrl}" 
            srcset="${imageUrl2x} 2x" 
            alt="${name}" 
            class="product-image" 
          />
          <div class="sizes">
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
            <button>2XL</button>
            <button>3XL</button>
            <button>4XL</button>
          </div>
        </div>
        <div class="card-info-wrapper">
          <div class="card-info">
            <p class="product-name">${name}</p>
            <div class="product-prices">${priceHtml}</div>
          </div>
          <button class="cart-btn" ${isSoldOut ? "disabled" : ""}>
            <svg class="cart-icon" width="16" height="16">
              <use href="./img/symbol-defs.svg#icon-cart"></use>
            </svg>
          </button>
        </div>
      </div>
    `;
  };

  fetch("./js/json/products.json")
    .then((res) => res.json())
    .then((data) => {
      productsContainer.innerHTML = data.map(createProductCard).join("");
    })
    .catch((err) => console.error("Ошибка загрузки:", err));

  viewAllBtn.addEventListener("click", (e) => {
    e.preventDefault();
    isExpanded = !isExpanded;
    productsContainer.classList.toggle("expanded", isExpanded);

    const span = viewAllBtn.querySelector(".view-all-link-text");
    if (span) span.textContent = isExpanded ? "Hide" : "View all";

    viewAllBtn.classList.toggle("is-expanded", isExpanded);
  });
});
