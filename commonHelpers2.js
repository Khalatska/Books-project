import{b as k,a as y}from"./assets/dark.-theme-6e77600c.js";const n=document.querySelector(".shopped-books"),t=JSON.parse(localStorage.getItem("shopping-list"))||[];n.insertAdjacentHTML("beforeend",p(t));function p(o){const e=window.innerWidth>768;return o.map(({book_image:s,title:i,list_name:h,description:a,author:g,buy_links:c,_id:b})=>{a||(a="Sorry, but this book does not have an accessible description. Try reading it on the website of one of the shops");const f=e?300:86,m=e?40:16;return`<li class="bought-book">
        <div class="img-container-shopping"> 
    <img src="${s}" alt="${i}" class="img-bought-book"/> </div>
    <div class="description-container">
    <h2 class="bought-book-title">${l(16,i)}</h2>
    <p class="bought-book-name">${l(m,h)}</p>
    <p class="bought-book-description">${l(f,a)}</p>
    <div class="author-shop-links">
    <p class="bought-book-author">${l(15,g)}</p>
    <ul class="shopping-shops">
      <li> 
    <a href="${c.filter(({name:r})=>r==="Amazon").url}" target="_blanket" class="shopping-shops-link"><img src="${k}" alt="Amazon" class="img-shop-icon"/></a>
    </li>
    <li> 
    <a href="${c.filter(({name:r})=>r==="Apple").url}" target="_blank" class="shopping-shops-link"><img src="${y}" alt="Apple Books" class="img-shop-icon-apple"/></a>
    </li>
    </ul>
    </div>
    </div>

    <button type="button" data-id=${b} class="btn-delete-book">
    <svg class="trash-icon">
    <use href="../img/sprite.svg#icon-trash"></use></svg></button>
 
    </li>`}).join("")}d();function d(){document.querySelectorAll(".btn-delete-book").forEach(e=>{e.addEventListener("click",s=>{const i=s.currentTarget.dataset.id;v(i)})})}function v(o){const e=t.findIndex(s=>o===s._id);e!==-1&&(t.splice(e,1),localStorage.setItem("shopping-list",JSON.stringify(t)),u(),n.innerHTML="",n.insertAdjacentHTML("beforeend",p(t)),d())}u();function u(){const o=document.querySelector(".container-empty-list");t.length===0?(o.style.display="flex",n.style.display="none"):(o.style.display="none",n.style.display="flex")}function l(o,e){return e.length>o?e.slice(0,o)+"...":e}window.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".support-container");function e(){window.innerWidth>1439?o.style.display="flex":o.style.display="none"}e(),window.addEventListener("resize",e)});
//# sourceMappingURL=commonHelpers2.js.map
