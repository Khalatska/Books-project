import{b as y,a as v}from"./assets/dark.-theme-83c7fcc1.js";const n=document.querySelector(".shopped-books"),t=JSON.parse(localStorage.getItem("shopping-list"))||[];n.insertAdjacentHTML("beforeend",c(t));function c(o){const e=window.innerWidth>768;return o.map(({book_image:s,title:i,list_name:u,description:a,author:h,buy_links:r,_id:g,amazon_product_url:b})=>{a||(a="Sorry, but this book does not have an accessible description. Try reading it on the website of one of the shops");const f=r[1]?r[1].url:"",m=e?300:86,k=e?40:16;return`<li class="bought-book">
        <div class="img-container-shopping"> 
    <img src="${s}" alt="${i}" class="img-bought-book"/> </div>
    <div class="description-container">
    <h2 class="bought-book-title">${l(16,i)}</h2>
    <p class="bought-book-name">${l(k,u)}</p>
    <p class="bought-book-description">${l(m,a)}</p>
    <div class="author-shop-links">
    <p class="bought-book-author">${l(15,h)}</p>
    <ul class="shopping-shops">
      <li> 
    <a href="${b}" target="_blanket" class="shopping-shops-link"><img src="${y}" alt="Amazon" class="img-shop-icon"/></a>
    </li>
    <li> 
    <a href="${f}" target="_blank" class="shopping-shops-link"><img src="${v}" alt="Apple Books" class="img-shop-icon-apple"/></a>
    </li>
    </ul>
    </div>
    </div>

    <button type="button" data-id=${g} class="btn-delete-book">
    <svg class="icon-burger">
    <use href="../img/sprite.svg#icon-x-close"></use></svg></button>
 
    </li>`}).join("")}p();function p(){document.querySelectorAll(".btn-delete-book").forEach(e=>{e.addEventListener("click",s=>{const i=s.currentTarget.dataset.id;L(i)})})}function L(o){const e=t.findIndex(s=>o===s._id);e!==-1&&(t.splice(e,1),localStorage.setItem("shopping-list",JSON.stringify(t)),d(),n.innerHTML="",n.insertAdjacentHTML("beforeend",c(t)),p())}d();function d(){const o=document.querySelector(".container-empty-list");t.length===0?(o.style.display="flex",n.style.display="none"):(o.style.display="none",n.style.display="flex")}function l(o,e){return e.length>o?e.slice(0,o)+"...":e}window.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".support-container");function e(){window.innerWidth>1439?o.style.display="flex":o.style.display="none"}e(),window.addEventListener("resize",e)});
//# sourceMappingURL=commonHelpers2.js.map
