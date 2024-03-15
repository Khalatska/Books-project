import{a as C,b as S}from"./assets/dark.-theme-ce0e9697.js";import{a as u,b as B}from"./assets/vendor-27708577.js";u.defaults.baseURL="https://books-backend.p.goit.global/books";async function $(){return(await u.get("/category-list")).data}async function w(){return(await u.get("/top-books")).data}async function h(e){return(await u.get(`/category?category=${e}`)).data}async function E(e){return(await u.get(`/${e}`)).data}const A="/Books-project/assets/barnes-and-noble-ee0e2630.png",T="/Books-project/assets/books-a-million-6e265484.png",q="/Books-project/assets/bookshop-0c971e03.png",M="/Books-project/assets/indiebound-cc4cda19.png",k="shopping-list",d=x(k)||[],y=async e=>{if(e.preventDefault(),e.target.nodeName!=="IMG")return;const t=e.target.dataset.id,s=await E(t);I(s);const o=document.querySelector(".addBtn");o.addEventListener("click",j(s)),d.length>0&&(d.some(a=>t===a._id)?(o.textContent="Remove from the shopping list",o.classList.add("mobileWidth")):o.textContent="Add to shopping list")},j=e=>t=>{if(t.preventDefault(),t.target.textContent==="Remove from the shopping list"){t.target.textContent="Add to shopping list",t.target.classList.remove("mobileWidth");const s=d.findIndex(o=>o._id===e._id);d.splice(s,1),H()}else t.target.textContent="Remove from the shopping list",t.target.classList.add("mobileWidth"),d.push(e),N();localStorage.setItem(k,JSON.stringify(d))};function x(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}function I({book_image:e,title:t,author:s,description:o,buy_links:n}){o===""&&(o="Book description has not been added yet...");const a=B.create(`<div class="modal"> 
 <button type="button" class="modal-close-btn">
<svg class="modal-close-icon">
<use href="./img/sprite.svg#icon-close-modal"></use>
</svg>
</button>
<div class="img-container">
<div class="img-top-container"> 
<img src="${e}" alt="${t}" class="img-modal"/>
</div>
<div class="img-bottom-container">
<h2 class="title-modal">${t}</h2>
<p class="author-modal">${s}</p>
<p class="description-modal">${o}</p>
<ul class="buy-links-container"></ul>
</div>
</div>
<button class="addBtn" type="submit">Add to shopping list</button>
</div>
`,{onShow:c=>{document.body.style.overflow="hidden";const m=c.element().querySelector(".modal-close-btn");m.onclick=()=>c.close()},onClose:c=>{document.body.style.overflow="visible"}}),i=a.element().querySelector(".buy-links-container");W({buy_links:n,book_image:e,title:t,author:s},i),a.show(),document.addEventListener("keydown",r);function r(c){c.key==="Escape"&&(a.close(),document.removeEventListener("keydown",r))}}function W({buy_links:e,book_image:t,title:s,author:o},n){e.forEach(a=>{const i=document.createElement("li");n.appendChild(i);const r=document.createElement("a");i.appendChild(r);const c=document.createElement("img");r.appendChild(c),r.target="_blank",c.alt=a.name+" Icon",c.className="img-shop",i.className="item-shop";const g=`${t}`.split("/").pop().split(".")[0];switch(a.name){case"Amazon":r.href=a.url,c.src=S;break;case"Apple Books":r.href=a.url,c.src=C,c.className="booksIconApple";break;case"Barnes and Noble":r.href=a.url,c.src=A;break;case"Books-A-Million":r.href=`https://www.booksamillion.com/p/${s}/${o}/${g}`,c.src=T;break;case"Bookshop":r.href=`https://bookshop.org/search?keywords=${g}`,c.src=q;break;default:r.href=`https://bookshop.org/p/books/atomic-habits-an-easy-proven-way-to-build-good-habits-break-bad-ones-james-clear/12117739?ean=${g}`,c.src=M;break}})}function N(){const e=document.querySelector(".modal"),t=document.createElement("p");t.className="congratulation",t.textContent="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",e.appendChild(t)}function H(){const e=document.querySelector(".congratulation");e&&e.remove()}const p=document.querySelector(".best-books-container");f();G();async function f(){p.insertAdjacentHTML("afterbegin",`
        <h1 class="best-sellers-title">Best Sellers <span class="accent-books">Books</span></h1>
        <ul class="best-sellers-books"></ul>
    `);const e=document.querySelector(".best-sellers-books");try{const t=await w();t.length===0?e.innerHTML="<p>No popular books found</p>":(t.forEach(o=>{const n=_(o);e.insertAdjacentHTML("beforeend",n)}),document.querySelectorAll(".btn-see-more").forEach(o=>{o.addEventListener("click",D)}))}catch(t){console.error("Error fetching top books:",t)}}function _(e){const t=e.books.map(s=>v(s)).join("");return`<li class="best-category">
    <p class="best-category-name">${e.list_name}</p>
    <ul class="best-book-list">${t}</ul>
    <button value="${e.list_name}" type="button" class="btn-see-more">See more</button>
    </li>`}function v({book_image:e,title:t,_id:s,author:o}){return` <li class="best-book-item">
    <div class="overlay-container"> 
    <img src="${e}" alt="${t}" data-id="${s}" class="best-book-img" width="375" height="485"/>
    <p class="overlay">Quick view</p>
    </div>
    <h2 class="best-book-title">${R(16,t)}</h2>
    <p class="best-book-author">${o}</p>
    </li>
    `}function R(e,t){return t.length>e?t.slice(0,e)+"...":t}async function D(e){e.preventDefault();const t=await h(e.target.value),s=z(e.target.value),o=t.map(a=>v(a)).join("");p.innerHTML=`
        <h2 class="selected-category-title">${s}</h2>
        <ul class="book-list-category">${o}</ul>
    `,window.scrollTo({top:0,behavior:"smooth"}),document.querySelectorAll(".item-categories").forEach(a=>{a.textContent===e.target.value?a.classList.add("active"):a.classList.remove("active")})}function z(e){const t=e.split(" "),s=t[t.length-1];return`${t.slice(0,-1).join(" ")} <span class="accent-books">${s}</span>`}function G(){p.addEventListener("click",function(e){e.target.classList.contains("best-book-img")&&y(e)})}const L=document.querySelector(".list-categories");async function J(){try{const t=(await $()).sort((o,n)=>o.list_name.localeCompare(n.list_name)),s=O(t);L.insertAdjacentHTML("beforeend",s)}catch(e){console.error("Error fetching categories:",e)}}function K({list_name:e}){return`
     <li class="item-categories">${e}</li>
    `}function O(e){return e.map(K).join("")}J();const b=document.querySelector(".best-books-container"),Q=document.querySelector(".item-categories");Q.classList.add("active");L.addEventListener("click",e=>{if(b.innerHTML="",b.insertAdjacentHTML("afterbegin",`
    <h2 class="selected-category-title"> <span class="selected-category-accent"></span></h2>
    <ul class="book-list-category"></ul>`),document.querySelector(".book-list-category").addEventListener("click",y),e.target&&e.target.matches("li.item-categories")){let s=e.target.textContent;if(s==="All Categories"){f(),document.querySelectorAll(".item-categories").forEach(a=>{a.classList.remove("active")}),e.target.classList.add("active");return}F(s),document.querySelectorAll(".item-categories").forEach(n=>{n.classList.remove("active")}),e.target.classList.add("active")}});async function F(e){const t=document.querySelector(".book-list-category");t.innerHTML="";const o=(await h(e)).map(l=>` <li class="selected-item-category">
    <div class="overlay-container"> 
    <img src="${l.book_image}" alt="${l.title}" data-id="${l._id}" class="selected-category-img-mob"/>
    <p class="overlay">Quick view</p>
    </div>
    <h3 class="category-title">${U(16,l.title)}</h3>
    <p class="selected-category-text">${l.author}</p>
    </li>
    `).join("");t.insertAdjacentHTML("afterbegin",o);const n=e.split(" "),a=n[n.length-1],i=document.querySelector(".selected-category-accent");i.textContent=a;const r=document.querySelector(".selected-category-title"),m=n.slice(0,-1).join(" ");r.insertAdjacentHTML("afterbegin",m)}function U(e,t){return t.length>e?t.slice(0,e)+"...":t}
//# sourceMappingURL=commonHelpers.js.map
