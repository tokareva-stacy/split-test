(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();(()=>{const n=document.querySelector("[data-menu]"),o=document.querySelector("[data-menu-open]"),c=document.querySelector("[data-menu-close]"),r=document.body;if(n&&o&&c){const e=()=>{n.classList.toggle("is-open"),r.classList.toggle("is-menu-open")};o.addEventListener("click",e),c.addEventListener("click",e)}})();document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".products"),o=document.querySelector(".view-all-link");let c=!1;const r=e=>{const{name:t,price:i,oldPrice:l,isSellingFast:a,isSoldOut:s,isDiscount:d,imageUrl:f,imageUrl2x:u}=e;let p="";a&&(p+='<span class="label selling-fast">SELLING FAST</span>'),d&&(p+=`<span class="label discount ${a?"shifted":""}">20% OFF</span>`),s&&(p+='<span class="label sold-out">SOLD OUT</span>');const m=l!=null,v=m?"price discounted":"price",g=m?`<span class="${v}">$${i}</span> <span class="old-price">$${l}</span>`:`<span class="${v}">$${i}</span>`;return`
      <div class="product-card ${s?"sold-out-card":""}">
        <div class="product-image-wrapper">
          ${p}
          <img 
            src="${f}" 
            srcset="${u} 2x" 
            alt="${t}" 
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
            <p class="product-name">${t}</p>
            <div class="product-prices">${g}</div>
          </div>
          <button class="cart-btn" ${s?"disabled":""}>
            <svg class="cart-icon" width="16" height="16">
              <use href="./img/symbol-defs.svg#icon-cart"></use>
            </svg>
          </button>
        </div>
      </div>
    `};fetch("./js/json/products.json").then(e=>e.json()).then(e=>{n.innerHTML=e.map(r).join("")}).catch(e=>console.error("Ошибка загрузки:",e)),o.addEventListener("click",e=>{e.preventDefault(),c=!c,n.classList.toggle("expanded",c);const t=o.querySelector(".view-all-link-text");t&&(t.textContent=c?"Hide":"View all"),o.classList.toggle("is-expanded",c)})});document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".img-wrapper"),o=n.querySelector(".before-wrapper"),c=n.querySelector(".after-wrapper"),r=n.querySelector(".slider-handle");let e=!1;function t(s){const d=n.getBoundingClientRect(),u=Math.max(0,Math.min(s-d.left,d.width))/d.width*100;o.style.clipPath=`inset(0 ${100-u}% 0 0)`,c.style.clipPath=`inset(0 0 0 ${u}%)`,r.style.left=`${u}%`}const i=s=>{e=!0,t(s.touches?s.touches[0].clientX:s.clientX),s.preventDefault()},l=s=>{e&&(s.touches&&s.preventDefault(),t(s.touches?s.touches[0].clientX:s.clientX))},a=()=>e=!1;r.addEventListener("mousedown",i),r.addEventListener("touchstart",i,{passive:!1}),document.addEventListener("mousemove",l),document.addEventListener("touchmove",l,{passive:!1}),document.addEventListener("mouseup",a),document.addEventListener("touchend",a),n.addEventListener("click",s=>t(s.clientX))});
//# sourceMappingURL=index.js.map
