import{b as m,a as k}from"./assets/dark.-theme-8293671c.js";const n=document.querySelector(".shopped-books"),t=JSON.parse(localStorage.getItem("shopping-list"))||[];n.insertAdjacentHTML("beforeend",p(t));function p(e){const o=window.innerWidth>768;return e.map(({book_image:s,title:i,list_name:h,description:a,author:g,buy_links:c,_id:b})=>{a||(a="Sorry, but this book does not have an accessible description. Try reading it on the website of one of the shops");const f=o?300:86;return`<li class="bought-book">
        <div class="img-container-shopping"> 
    <img src="${s}" alt="${i}" class="img-bought-book"/> </div>
    <div class="description-container">
    <h2 class="bought-book-title">${l(16,i)}</h2>
    <p class="bought-book-name">${l(16,h)}</p>
    <p class="bought-book-description">${l(f,a)}</p>
    <div class="author-shop-links">
    <p class="bought-book-author">${l(15,g)}</p>
    <ul class="shopping-shops">
      <li> 
    <a href="${c.filter(({name:r})=>r==="Amazon").url}" target="_blanket" class="shopping-shops-link"><img src="${m}" alt="Amazon" class="img-shop-icon"/></a>
    </li>
    <li> 
    <a href="${c.filter(({name:r})=>r==="Apple").url}" target="_blank" class="shopping-shops-link"><img src="${k}" alt="Apple Books" class="img-shop-icon-apple"/></a>
    </li>
    </ul>
    </div>
    </div>

    <button type="button" data-id=${b} class="btn-delete-book">
    <svg class="trash-icon">
    <use href="./img/sprite.svg#icon-trash"></use></svg></button>
 
    </li>`}).join("")}d();function d(){document.querySelectorAll(".btn-delete-book").forEach(o=>{o.addEventListener("click",s=>{const i=s.currentTarget.dataset.id;y(i)})})}function y(e){const o=t.findIndex(s=>e===s._id);o!==-1&&(t.splice(o,1),localStorage.setItem("shopping-list",JSON.stringify(t)),u(),n.innerHTML="",n.insertAdjacentHTML("beforeend",p(t)),d())}u();function u(){const e=document.querySelector(".container-empty-list");t.length===0?(e.style.display="flex",n.style.display="none"):(e.style.display="none",n.style.display="flex")}function l(e,o){return o.length>e?o.slice(0,e)+"...":o}window.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".support-container");function o(){window.innerWidth>1440?e.style.display="block":e.style.display="none"}o(),window.addEventListener("resize",o)});
//# sourceMappingURL=commonHelpers2.js.map
