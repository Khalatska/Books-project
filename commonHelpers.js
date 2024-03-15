import{a as C,b as S}from"./assets/dark.-theme-f406ec29.js";import{a as u,b as w}from"./assets/vendor-27708577.js";u.defaults.baseURL="https://books-backend.p.goit.global/books";async function B(){return(await u.get("/category-list")).data}async function $(){return(await u.get("/top-books")).data}async function h(e){return(await u.get(`/category?category=${e}`)).data}async function E(e){return(await u.get(`/${e}`)).data}const A="/Books-project/assets/barnes-and-noble-ee0e2630.png",T="/Books-project/assets/books-a-million-6e265484.png",q="/Books-project/assets/bookshop-0c971e03.png",M="/Books-project/assets/indiebound-cc4cda19.png",k="shopping-list",d=x(k)||[],f=async e=>{if(e.preventDefault(),e.target.nodeName!=="IMG")return;const t=e.target.dataset.id,s=await E(t);I(s);const o=document.querySelector(".addBtn");o.addEventListener("click",j(s)),d.length>0&&(d.some(c=>t===c._id)?(o.textContent="Remove from the shopping list",o.classList.add("mobileWidth")):o.textContent="Add to shopping list")},j=e=>t=>{if(t.preventDefault(),t.target.textContent==="Remove from the shopping list"){t.target.textContent="Add to shopping list",t.target.classList.remove("mobileWidth");const s=d.findIndex(o=>o._id===e._id);d.splice(s,1),H()}else t.target.textContent="Remove from the shopping list",t.target.classList.add("mobileWidth"),d.push(e),N();localStorage.setItem(k,JSON.stringify(d))};function x(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}function I({book_image:e,title:t,author:s,description:o,buy_links:a}){o===""&&(o="Book description has not been added yet...");const c=w.create(`<div class="modal"> 
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
`,{onShow:n=>{document.body.style.overflow="hidden";const m=n.element().querySelector(".modal-close-btn");m.onclick=()=>n.close()},onClose:n=>{document.body.style.overflow="visible"}}),r=c.element().querySelector(".buy-links-container");W({buy_links:a,book_image:e,title:t,author:s},r),c.show(),document.addEventListener("keydown",i);function i(n){n.key==="Escape"&&(c.close(),document.removeEventListener("keydown",i))}}function W({buy_links:e,book_image:t,title:s,author:o},a){e.forEach(c=>{const r=document.createElement("li");a.appendChild(r);const i=document.createElement("a");r.appendChild(i);const n=document.createElement("img");i.appendChild(n),i.target="_blank",n.alt=c.name+" Icon",n.className="img-shop",r.className="item-shop";const g=`${t}`.split("/").pop().split(".")[0];switch(c.name){case"Amazon":i.href=c.url,n.src=S;break;case"Apple Books":i.href=c.url,n.src=C,n.className="booksIconApple";break;case"Barnes and Noble":i.href=c.url,n.src=A;break;case"Books-A-Million":i.href=`https://www.booksamillion.com/p/${s}/${o}/${g}`,n.src=T;break;case"Bookshop":i.href=`https://bookshop.org/search?keywords=${g}`,n.src=q;break;default:i.href=`https://bookshop.org/p/books/atomic-habits-an-easy-proven-way-to-build-good-habits-break-bad-ones-james-clear/12117739?ean=${g}`,n.src=M;break}})}function N(){const e=document.querySelector(".modal"),t=document.createElement("p");t.className="congratulation",t.textContent="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",e.appendChild(t)}function H(){const e=document.querySelector(".congratulation");e&&e.remove()}const p=document.querySelector(".best-books-container");y();z();async function y(){p.insertAdjacentHTML("afterbegin",`
        <h1 class="best-sellers-title">Best Sellers <span class="accent-books">Books</span></h1>
        <ul class="best-sellers-books"></ul>
    `);const e=document.querySelector(".best-sellers-books");try{const t=await $();t.length===0?e.innerHTML="<p>No popular books found</p>":(t.forEach(o=>{const a=_(o);e.insertAdjacentHTML("beforeend",a)}),document.querySelectorAll(".btn-see-more").forEach(o=>{o.addEventListener("click",D)}))}catch(t){console.error("Error fetching top books:",t)}}function _(e){const t=e.books.map(s=>v(s)).join("");return`<li class="best-category">
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
    `}function R(e,t){return t.length>e?t.slice(0,e)+"...":t}async function D(e){e.preventDefault();const t=await h(e.target.value),s=F(e.target.value),o=t.map(r=>v(r)).join("");p.innerHTML=`
        <h2 class="selected-category-title">${s}</h2>
        <ul class="book-list-category">${o}</ul>
    `,document.querySelectorAll(".best-book-item ").forEach(r=>r.classList.add("display-five")),window.scrollTo({top:0,behavior:"smooth"}),document.querySelectorAll(".item-categories").forEach(r=>{r.textContent===e.target.value?r.classList.add("active"):r.classList.remove("active")})}function F(e){const t=e.split(" "),s=t[t.length-1];return`${t.slice(0,-1).join(" ")} <span class="accent-books">${s}</span>`}function z(){p.addEventListener("click",function(e){e.target.classList.contains("best-book-img")&&f(e)})}const L=document.querySelector(".list-categories");async function G(){try{const t=(await B()).sort((o,a)=>o.list_name.localeCompare(a.list_name)),s=K(t);L.insertAdjacentHTML("beforeend",s)}catch(e){console.error("Error fetching categories:",e)}}function J({list_name:e}){return`
     <li class="item-categories">${e}</li>
    `}function K(e){return e.map(J).join("")}G();const b=document.querySelector(".best-books-container"),O=document.querySelector(".item-categories");O.classList.add("active");L.addEventListener("click",e=>{if(b.innerHTML="",b.insertAdjacentHTML("afterbegin",`
    <h2 class="selected-category-title"> <span class="selected-category-accent"></span></h2>
    <ul class="book-list-category"></ul>`),document.querySelector(".book-list-category").addEventListener("click",f),e.target&&e.target.matches("li.item-categories")){let s=e.target.textContent;if(s==="All Categories"){y(),document.querySelectorAll(".item-categories").forEach(c=>{c.classList.remove("active")}),e.target.classList.add("active");return}Q(s),window.innerWidth<768&&window.scrollTo({top:1e3,behavior:"smooth"}),document.querySelectorAll(".item-categories").forEach(a=>{a.classList.remove("active")}),e.target.classList.add("active")}});async function Q(e){const t=document.querySelector(".book-list-category");t.innerHTML="";const o=(await h(e)).map(l=>` <li class="selected-item-category">
    <div class="overlay-container"> 
    <img src="${l.book_image}" alt="${l.title}" data-id="${l._id}" class="selected-category-img-mob"/>
    <p class="overlay">Quick view</p>
    </div>
    <h3 class="category-title">${U(16,l.title)}</h3>
    <p class="selected-category-text">${l.author}</p>
    </li>
    `).join("");t.insertAdjacentHTML("afterbegin",o);const a=e.split(" "),c=a[a.length-1],r=document.querySelector(".selected-category-accent");r.textContent=c;const i=document.querySelector(".selected-category-title"),m=a.slice(0,-1).join(" ");i.insertAdjacentHTML("afterbegin",m)}function U(e,t){return t.length>e?t.slice(0,e)+"...":t}
//# sourceMappingURL=commonHelpers.js.map
