import{b as g,a as f}from"./assets/dark.-theme-96b5dd10.js";const n=document.querySelector(".shopped-books"),t=JSON.parse(localStorage.getItem("shopping-list"))||[];n.insertAdjacentHTML("beforeend",p(t));function p(e){return e.map(({book_image:o,title:s,list_name:i,description:l,author:u,buy_links:c,_id:b})=>(l||(l="Sorry, but this book does not have an accessible description. Try reading it on the website of one of the shops"),`<li class="bought-book">
        <div class="img-container-shopping"> 
    <img src="${o}" alt="${s}" class="img-bought-book"/> </div>
    <div class="description-container">
    <h2 class="bought-book-title">${s}</h2>
    <p class="bought-book-name">${r(16,i)}</p>
    <p class="bought-book-description">${r(100,l)}</p>
    <div class="author-shop-links">
    <p class="bought-book-author">${r(15,u)}</p>
    <ul class="shopping-shops">
      <li> 
    <a href="${c.filter(({name:a})=>a==="Amazon").url}" target="_blanket" class="shopping-shops-link"><img src="${g}" alt="Amazon" class="img-shop-icon"/></a>
    </li>
    <li> 
    <a href="${c.filter(({name:a})=>a==="Apple").url}" target="_blank" class="shopping-shops-link"><img src="${f}" alt="Apple Books" class="img-shop-icon-apple"/></a>
    </li>
    </ul>
    </div>
    </div>

    <button type="button" data-id=${b} class="btn-delete-book">
    <svg class="trash-icon">
    <use href="./img/sprite.svg#icon-trash"></use></svg></button>
 
    </li>`)).join("")}d();function d(){document.querySelectorAll(".btn-delete-book").forEach(o=>{o.addEventListener("click",s=>{const i=s.currentTarget.dataset.id;k(i)})})}function k(e){const o=t.findIndex(s=>e===s._id);o!==-1&&(t.splice(o,1),localStorage.setItem("shopping-list",JSON.stringify(t)),h(),n.innerHTML="",n.insertAdjacentHTML("beforeend",p(t)),d())}h();function h(){const e=document.querySelector(".container-empty-list");t.length===0?(e.style.display="block",n.style.display="none"):(e.style.display="none",n.style.display="flex")}function r(e,o){return o.length>e?o.slice(0,e)+"...":o}
//# sourceMappingURL=commonHelpers2.js.map
