import{a as C,b as S}from"./assets/dark.-theme-97c21f1b.js";import{a as u,b as B}from"./assets/vendor-27708577.js";u.defaults.baseURL="https://books-backend.p.goit.global/books";async function $(){return(await u.get("/category-list")).data}async function E(){return(await u.get("/top-books")).data}async function f(e){return(await u.get(`/category?category=${e}`)).data}async function A(e){return(await u.get(`/${e}`)).data}const T="/Books-project/assets/barnes-and-noble-ee0e2630.png",q="/Books-project/assets/books-a-million-6e265484.png",M="/Books-project/assets/bookshop-0c971e03.png",j="/Books-project/assets/indiebound-cc4cda19.png",y="shopping-list",d=W(y)||[],v=async e=>{if(e.preventDefault(),e.target.nodeName!=="IMG")return;const t=e.target.dataset.id,s=await A(t);I(s);const o=document.querySelector(".addBtn");o.addEventListener("click",x(s)),d.length>0&&(d.some(r=>t===r._id)?(o.textContent="Remove from the shopping list",o.classList.add("mobileWidth")):o.textContent="Add to shopping list")},x=e=>t=>{if(t.preventDefault(),t.target.textContent==="Remove from the shopping list"){t.target.textContent="Add to shopping list",t.target.classList.remove("mobileWidth");const s=d.findIndex(o=>o._id===e._id);d.splice(s,1),H()}else t.target.textContent="Remove from the shopping list",t.target.classList.add("mobileWidth"),d.push(e),_();localStorage.setItem(y,JSON.stringify(d))};function W(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}function I({book_image:e,title:t,author:s,description:o,buy_links:a}){o===""&&(o="Book description has not been added yet...");const r=B.create(`<div class="modal"> 
 <button type="button" class="modal-close-btn">X
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
`,{onShow:n=>{document.body.style.overflow="hidden";const m=n.element().querySelector(".modal-close-btn");m.onclick=()=>n.close()},onClose:n=>{document.body.style.overflow="visible"}}),c=r.element().querySelector(".buy-links-container");N({buy_links:a,book_image:e,title:t,author:s},c),r.show(),document.addEventListener("keydown",i);function i(n){n.key==="Escape"&&(r.close(),document.removeEventListener("keydown",i))}}function N({buy_links:e,book_image:t,title:s,author:o},a){e.forEach(r=>{const c=document.createElement("li");a.appendChild(c);const i=document.createElement("a");c.appendChild(i);const n=document.createElement("img");i.appendChild(n),i.target="_blank",n.alt=r.name+" Icon",n.className="img-shop",c.className="item-shop";const p=`${t}`.split("/").pop().split(".")[0];switch(r.name){case"Amazon":i.href=r.url,n.src=S;break;case"Apple Books":i.href=r.url,n.src=C,n.className="booksIconApple";break;case"Barnes and Noble":i.href=r.url,n.src=T;break;case"Books-A-Million":i.href=`https://www.booksamillion.com/p/${s}/${o}/${p}`,n.src=q;break;case"Bookshop":i.href=`https://bookshop.org/search?keywords=${p}`,n.src=M;break;default:i.href=`https://bookshop.org/p/books/atomic-habits-an-easy-proven-way-to-build-good-habits-break-bad-ones-james-clear/12117739?ean=${p}`,n.src=j;break}})}function _(){const e=document.querySelector(".modal"),t=document.createElement("p");t.className="congratulation",t.textContent="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",e.appendChild(t)}function H(){const e=document.querySelector(".congratulation");e&&e.remove()}const b=document.querySelector(".best-books-container");L();G();async function L(){try{const e=await E();R(e)}catch{console.log("Error with your API")}}function R(e){b.insertAdjacentHTML("afterbegin",`
        <h1 class="best-sellers-title">Best Sellers <span class="accent-books">Books</span></h1>
        <ul class="best-sellers-books"></ul>
    `);const t=document.querySelector(".best-sellers-books");e.length===0?t.innerHTML="<p>No popular books found</p>":(e.forEach(o=>{const a=D(o);t.insertAdjacentHTML("beforeend",a)}),document.querySelectorAll(".btn-see-more").forEach(o=>{o.addEventListener("click",O)}))}function D(e){const t=e.books.map(s=>w(s)).join("");return`<li class="best-category">
    <p class="best-category-name">${e.list_name}</p>
    <ul class="best-book-list">${t}</ul>
    <button value="${e.list_name}" type="button" class="btn-see-more">See more</button>
    </li>`}function w({book_image:e,title:t,_id:s,author:o}){return` <li class="best-book-item">
    <div class="overlay-container"> 
    <img src="${e}" alt="${t}" data-id="${s}" class="best-book-img" width="375" height="485"/>
    <p class="overlay">Quick view</p>
    </div>
    <h2 class="best-book-title">${F(16,t)}</h2>
    <p class="best-book-author">${o}</p>
    </li>
    `}function F(e,t){return t.length>e?t.slice(0,e)+"...":t}async function O(e){e.preventDefault();const t=await f(e.target.value),s=z(e.target.value),o=t.map(c=>w(c)).join("");b.innerHTML=`
        <h2 class="selected-category-title">${s}</h2>
        <ul class="book-list-category">${o}</ul>
    `,document.querySelectorAll(".best-book-item ").forEach(c=>c.classList.add("display-five")),window.scrollTo({top:0,behavior:"smooth"}),document.querySelectorAll(".item-categories").forEach(c=>{c.textContent===e.target.value?c.classList.add("active"):c.classList.remove("active")})}function z(e){const t=e.split(" "),s=t[t.length-1];return`${t.slice(0,-1).join(" ")} <span class="accent-books">${s}</span>`}function G(){b.addEventListener("click",function(e){e.target.classList.contains("best-book-img")&&v(e)})}const g=document.querySelector(".list-categories");J();async function J(){try{const t=(await $()).sort((o,a)=>o.list_name.localeCompare(a.list_name)),s=Q(t);g.insertAdjacentHTML("beforeend",s)}catch(e){console.error("Error fetching categories:",e)}}function K({list_name:e}){return`
     <li class="item-categories">${e}</li>
    `}function Q(e){return e.map(K).join("")}const h=document.querySelector(".best-books-container"),U=document.querySelector(".item-categories");U.classList.add("active");document.addEventListener("DOMContentLoaded",()=>{g?g.addEventListener("click",e=>{const t=e.target.closest(".item-categories");if(!t)return;h.replaceChildren(),h.insertAdjacentHTML("afterbegin",`
          <h1 class="selected-category-title"> <span class="selected-category-accent"></span></h1>
          <ul class="book-list-category"></ul>
        `),document.querySelector(".book-list-category").addEventListener("click",v);let o=t.textContent.trim();o==="All Categories"?(L(),window.innerWidth<768&&k()):(P(o),window.innerWidth<768&&k()),document.querySelectorAll(".item-categories").forEach(a=>{a.classList.remove("active")}),t.classList.add("active")}):console.error('Element with id "categoryList" not found')});async function P(e){const t=document.querySelector(".book-list-category");t.innerHTML="";const o=(await f(e)).map(l=>` <li class="selected-item-category">
    <div class="overlay-container"> 
    <img src="${l.book_image}" alt="${l.title}" data-id="${l._id}" class="selected-category-img-mob"/>
    <p class="overlay">Quick view</p>
    </div>
    <h3 class="category-title">${V(16,l.title)}</h3>
    <p class="selected-category-text">${l.author}</p>
    </li>
    `).join("");t.insertAdjacentHTML("afterbegin",o);const a=e.split(" "),r=a[a.length-1],c=document.querySelector(".selected-category-accent");c.textContent=r;const i=document.querySelector(".selected-category-title"),m=a.slice(0,-1).join(" ");i.insertAdjacentHTML("afterbegin",m)}function V(e,t){return t.length>e?t.slice(0,e)+"...":t}function k(){document.querySelector("h1").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}
//# sourceMappingURL=commonHelpers.js.map
