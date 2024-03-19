import{b as y,a as L}from"./assets/dark.-theme-c211e563.js";const s=document.querySelector(".shopped-books"),t=JSON.parse(localStorage.getItem("shopping-list"))||[];s.insertAdjacentHTML("beforeend",c(t));function c(o){const e=window.innerWidth>768;return o.map(({book_image:n,title:i,list_name:h,description:l,author:u,buy_links:r,_id:g,amazon_product_url:b})=>{l||(l="Sorry, but this book does not have an accessible description. Try reading it on the website of one of the shops");const f=r[1]?r[1].url:"",k=e?300:86,m=e?40:16;return`<li class="bought-book">
        <div class="img-container-shopping"> 
    <img src="${n}" alt="${i}" class="img-bought-book"/> </div>
    <div class="description-container">
    <h2 class="bought-book-title">${a(16,i)}</h2>
    <p class="bought-book-name">${a(m,h)}</p>
    <p class="bought-book-description">${a(k,l)}</p>
    <div class="author-shop-links">
    <p class="bought-book-author">${a(15,u)}</p>
    <ul class="shopping-shops">
      <li> 
    <a href="${b}" target="_blanket" class="shopping-shops-link"><img src="${y}" alt="Amazon" class="img-shop-icon"/></a>
    </li>
    <li> 
    <a href="${f}" target="_blank" class="shopping-shops-link"><img src="${L}" alt="Apple Books" class="img-shop-icon-apple"/></a>
    </li>
    </ul>
    </div>
    </div>

    <button type="button" data-id=${g} class="btn-delete-book">X</button>
 
    </li>`}).join("")}p();function p(){document.querySelectorAll(".btn-delete-book").forEach(e=>{e.addEventListener("click",n=>{const i=n.currentTarget.dataset.id;S(i)})})}function S(o){const e=t.findIndex(n=>o===n._id);e!==-1&&(t.splice(e,1),localStorage.setItem("shopping-list",JSON.stringify(t)),d(),s.innerHTML="",s.insertAdjacentHTML("beforeend",c(t)),p())}d();function d(){const o=document.querySelector(".container-empty-list");t.length===0?(o.style.display="flex",s.style.display="none"):(o.style.display="none",s.style.display="flex")}function a(o,e){return e.length>o?e.slice(0,o)+"...":e}window.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".support-container");function e(){window.innerWidth>1439?o.style.display="flex":o.style.display="none"}e(),window.addEventListener("resize",e)});
//# sourceMappingURL=commonHelpers2.js.map
