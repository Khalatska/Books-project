import{a as d,b as L}from"./assets/vendor-27708577.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const m={closeMenuElem:document.querySelector(".btn-close-menu"),openMenuElem:document.querySelector(".btn-open-menu"),modalMenuElem:document.querySelector(".mob-menu")};m.closeMenuElem.addEventListener("click",()=>{m.modalMenuElem.classList.remove("is-visible")});m.openMenuElem.addEventListener("click",()=>{m.modalMenuElem.classList.add("is-visible")});d.defaults.baseURL="https://books-backend.p.goit.global/books";async function v(){return(await d.get("/category-list")).data}async function w(){return(await d.get("/top-books")).data}async function f(e){return(await d.get(`/category?category=${e}`)).data}async function C(e){return(await d.get(`/${e}`)).data}const N="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAUCAYAAADV9o4UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATNSURBVHgBzVhZbJVVEJ57KWAplSqKKKaKIiiNSqqNBlzi/uCLoqKJiWIgRh6UiPJghAApBHgBwpbQQMIeCPsOYXkgBEpYCiRAwxbC2pa9ZW2hh+/jzM+d/v1LL7Q3ZZIvc+6cOXPmbDPz35gYcs51BfsYSAeKga2xWOyy6X8VrCVQBlQBeUAaUEg99Gei3R2IA9vsWB3/lPa/AVwEiqBTZPo5vqNEUyl0S43uS2DdgFvAHvSVmL4ssBfoI+SHdV05wBE7HxXbA8uAKleTOCjH6JWofCqw1+jtA3KBA0Z2DHjRjO0JXAzZrwbGATHV+czVTaNUpzkwAbhl+uhXPzNXf9PXD7hpfg+zCy9Q4R1gCbDIKC41eqUqO13bL1ccIRuu4zoAZ1XGDZkSstFd9d4FLhlUGp3/Vec/I9vgEpt9neNVZ6DRORPyqRxoHyxoh/O7P8csslAVT0Qs/DzwHvCDMXgB+AL4XG2RFus4ym44v7EdVfadGTtAQgRZto655wOQAaQZH7apXkv1hzQ7YuG8ye2AdUbWje9TcO/z8KOFH+Oe1PcQVx/SpDZtx5jt0N2J9m3V4XtdrxOfB3s2sAH5BrB0yFuDX3M+VmQbe0+EFt0MbImR94YNjstFu53K1qptXvlCNL8GvuXmhHzNh04Z5PPQ/lJl6Vbpd+A3IFfqpwqdlCd4E00u6Kr1PcS5GAa0f4BeQGY99v81fhRgnk3azjE65aYdBL1WQFbI1mnlN4wsFlenJoNN0MnmqnNFUjc5045HyGI1lJ17WfwJ9VFHeLWHSJRh5zqBDdafR4GhpruZRNOdCH+ifL1PwYn3Ub4Yu/uzOtBXGk7BpL9K4mr3xBwHYf/TWso+ui8EMlTUF7pnjcpx084w7Uwz3xWpY7GWgt1pofyUOsC39abKWke8mxr+Sv3UybTLlOcZWQfl3Oy3jXwN5j7lfPp8Db93i48ppI/U1+ZgH6hsC9+8JEHBwquVM0rzdBgInlcZdzNfGkYVpp2POf4E/9vIGOE53/uhcTwAbgpvJN863/UM7fsEYwaBjweCemGyJEnBSS4AfhS/2OkAA9YIdY5XZ6M0jCYBfELMGEGhsVV85P4DYGoKgg8zBbMAK8dKoDPwlSTeN/N5D+B1qXkgY4D5kiQFFdPTYN+Lv97XgXks7Zhr0T6K9h7Vo9NMU7sgW6Wyv8RHUpaNyx+g1wWst/gMsFf8ZnOuX3S+a+oHZbzObdQ/lrZ8Tl2gU6y2aOMn8TeEgW0FsBr91dr/Ftg34m/ySM0+XXWNpGmSDDlfSraSFBOjPzAWqDDFBr8BekgjUzxJPVZvrO76a+RNFfGtbhZfjDBgDRR/8m2lqQgLfgU4BBx3vl7OlhQQ7D7DoOV8OfyOnnqONCXBgTbAaOdr8avASqBXQzcB4zOZTYD5zn9JMb50VtkxSQE90rXV8rNAEvmTdARgzbwf2AfQ4ZMMWmYcswi/kxloWCXyg4UBihGafUx7LGtnYRw3YL22Z8rjRHDsQ+c/Yctd3XRbT7HSJb7aLFHGT8sBQFtjOwuYmKqY0ihG+S7FpwrmW6YSXv0HVXus3lglrhafs/lPT1WEXYhjyVSGD02NvpvOf1Jy4c+Jj8jMzSwrmZ/PAOeAEiyoQpqQ7gI3SG5S8HEvjQAAAABJRU5ErkJggg==",M="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN/SURBVHgB7VdJjExBGP7+6uluYmgkthmS0YdhLpYgHIZEuFhCiHBxJXFzEOHiKBFbuFhCxBEniUQcjEhExBJMIhwsI5a2RmaEWbpf/f5+vVW9rvf6dTJu8yeVrqr31V9f/VtVA2NSEor6yOfTnV6y0E2gaQpIaY7Gm6IIrDXyDP6c0N4j2oWXaIYEX8Q8RvKKdBdi9OQtjeTX0B70oREJPof5rJIPQJQpz8DNNWw+EpcnxlLaNdJrIlrqllDqpqzL+GvdPBvMR+KSovYaM+YT1XZQJqJwNrUVmjqkodg48BvW2DHmkLH8dnrn0uvMfS0SxLSaWYDlhsBvWINjjJBxqa82mPta7hCWWXKZuWUikN0Iamkt2gvc3wd8vC2slY1rXwWamAUSKfDfHPDtMfAnB4eH2kJJKKY0cwC/7ABo0V4gPcnQIfL1CfStncDAe6B1NtTaC8DsVTZmuB/88Ai495Sc0FRMrda+5kB7MjZ8SR2bQcsPWQSqMmMJaO0lwYmSTdctAlVJZ0ArD4Oy26yYUcwq1BLggHknzEGUUNsKcKYLmNoVicO4GaVYqIi2XW6T8IqaDUDANU6ZsqAxhv14q0VbIOzswKxEb0V0jGpALY0QJb26Vhg4cDpbg2+mJi3BMYoWw3ZBlCWgFWplluNv0CyJaEuYNGOW5dgkjHGgvtS7o2yE0uI4loiJqViCAoTgsAQb2UEajfXHwFRLtt8v8ohKUU7YlS2OqWORgBUTHBmYdXXC6A9JCf7xxvcntS9yY7w8+KdgBvtB0+cB4yeXiVJdgQolIbcoWyW+mCCfnkPfOAjOPRVFhdLkuMlQy3dDrdlftZbuOQF+cAY89AuVoKb2xVBbTjeXHfImLNe1Eki/kDvh0WU5YcFYKN//9kPfOSrdhG8Jfesw9L2TZUgtu/jDM3inusUiGcttHBUTYonf1Y2KMvDD/Iqg6J5jQEc3+NlVub4TcIuk4+Bva70E83AoCU9TLgHrzHWxSdXT+DSA13f90l3JJK7D1PQYFehdgKbBiNUNjni2uZ5u/s1b/4SDS09lXlb0uA5WYU4j+2a+kgTpxP+TvtTRL3MRZgn/DtV6OzQX/EAa7ebxgBTD9UFWzuTlAzM78sMoPiKzCBNXwEQK97KiHenjuVcuVeHL9s7q8pRaxqzbpJImm/0bKPEyIhn8nRN837X5mATlH/NXv+oaRoVuAAAAAElFTkSuQmCC",T="/Books-project/assets/barnes-and-noble-ee0e2630.png",W="/Books-project/assets/books-a-million-6e265484.png",Y="/Books-project/assets/bookshop-0c971e03.png",j="/Books-project/assets/indiebound-cc4cda19.png",h="shopping-list",g=O(h)||[],B=async e=>{if(e.preventDefault(),e.target.nodeName!=="IMG")return;const t=e.target.dataset.id,n=await C(t);q(n),document.querySelector(".addBtn").addEventListener("click",V(n))};function O(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}const V=e=>t=>{if(t.preventDefault(),t.target.textContent==="Remove from the shopping list"){t.target.textContent="Add to shopping list";const n=g.findIndex(a=>a._id===e._id);g.splice(n,1)}else t.target.textContent="Remove from the shopping list",g.push(e);localStorage.setItem(h,JSON.stringify(g))};function q({book_image:e,title:t,author:n,description:a,buy_links:o}){a===""&&(a="Book description has not been added yet...");const s=L.create(` <button type="button" class="closeModalBtn">
<svg>
<use href="../img/sprite.svg#icon-x-close"></use>
</svg>
</button>
<img src=""${e} alt="${t}" class="img-modal"/>
<h2 class="title-modal">${t}</h2>
<p class="author-modal">${n}</p>
<p class="description-modal">${a}</p>
<ul class="buy-links-container"></ul>
<button class="addBtn" type="submit">Add to shopping list</button>
`,{onShow:r=>{const u=r.element().querySelector(".closeModalBtn");u.onclick=()=>r.close()},onClose:r=>{}}),l=s.element().querySelector(".buy-links-container");X({buy_links:o,book_image:e,title:t,author:n},l),s.show(),document.addEventListener("keydown",c);function c(r){r.key==="Escape"&&(s.close(),document.removeEventListener("keydown",c))}}function X({buy_links:e,book_image:t,title:n,author:a},o){e.forEach(s=>{const l=document.createElement("li");o.appendChild(l);const c=document.createElement("a");l.appendChild(c);const r=document.createElement("img");c.appendChild(r),c.target="_blank",r.alt=s.name+" Icon",r.className="img-shop",l.className="item-shop";const A=`${t}`.split("/").pop().split(".")[0];switch(s.name){case"Amazon":c.href=s.url,r.src=N;break;case"Apple Books":c.href=s.url,r.src=M;break;case"Barnes and Noble":c.href=s.url,r.src=T;break;case"Books-A-Million":c.href=`https://www.booksamillion.com/p/${n}/${a}/${A}`,r.src=W;break;case"Bookshop":c.href=`https://bookshop.org/search?keywords=${A}`,r.src=Y;break;default:c.href=`https://bookshop.org/p/books/atomic-habits-an-easy-proven-way-to-build-good-habits-break-bad-ones-james-clear/12117739?ean=${A}`,r.src=j;break}})}const p=document.querySelector(".best-books-container");y();S();async function y(){p.insertAdjacentHTML("afterbegin",`
    <h1 class="best-sellers-title">Best Sellers <span class="accent-books">Books</span></h1>
    <ul class="best-sellers-books"></ul>
    `);const e=document.querySelector(".best-sellers-books");(await w()).map(a=>{const o=D(a);e.insertAdjacentHTML("beforeend",o)}),document.querySelectorAll(".btn-see-more").forEach(a=>{a.addEventListener("click",I)})}function D(e){const t=e.books.map(n=>k(n)).join("");return`<li class="best-category">
    <p class="best-category-name">${e.list_name}</p>
    <ul class="best-book-list">${t}</ul>
    <button value="${e.list_name}" type="button" class="btn-see-more">See more</button>
    </li>`}function k({book_image:e,title:t,_id:n,author:a}){return` <li class="best-book-item">
    <img src="${e}" alt="${t}" data-id="${n}" class="best-book-img" width="375" height="485"/>
    <h2 class="best-book-title">${H(16,t)}</h2>
    <p class="best-book-author">${a}</p>
    </li>
    `}function H(e,t){return t.length>e?t.slice(0,e)+"...":t}async function I(e){e.preventDefault();const t=await f(e.target.value),n=U(e.target.value),a=t.map(s=>`
        <h2 class="selected-category-title">${n}</h2>
        <ul class="book-list-category">${k(s)}</ul>`);p.innerHTML="",p.insertAdjacentHTML("afterbegin",a),S(),window.scrollTo({top:0,behavior:"smooth"}),document.querySelectorAll(".item-categories").forEach(s=>{s.textContent===e.target.value?s.classList.add("active"):s.classList.remove("active")})}function U(e){const t=e.split(" "),n=t[t.length-1];return`${t.slice(0,-1).join(" ")} <span class="accent-books">${n}</span>`}function S(){p.addEventListener("click",function(e){e.target.classList.contains("best-book-img")&&B(e)})}const E=document.querySelector(".list-categories");async function Q(){try{const t=(await v()).sort((a,o)=>a.list_name.localeCompare(o.list_name)),n=J(t);E.insertAdjacentHTML("beforeend",n)}catch(e){console.error("Error fetching categories:",e)}}function R({list_name:e}){return`
     <li class="item-categories">${e}</li>
    `}function J(e){return e.map(R).join("")}Q();const b=document.querySelector(".best-books-container"),x=document.querySelector(".item-categories");x.classList.add("active");E.addEventListener("click",e=>{if(b.innerHTML="",b.insertAdjacentHTML("afterbegin",`
    <h2 class="selected-category-title"> <span class="selected-category-accent"></span></h2>
    <ul class="book-list-category"></ul>`),document.querySelector(".book-list-category").addEventListener("click",B),e.target&&e.target.matches("li.item-categories")){let n=e.target.textContent;if(K(n),document.querySelectorAll(".item-categories").forEach(o=>{o.classList.remove("active")}),e.target.classList.add("active"),n==="All Categories"){y();return}}});async function K(e){const t=document.querySelector(".book-list-category");t.innerHTML="";const a=(await f(e)).map(i=>` <li>
    <img src="${i.book_image}" alt="${i.title}" data-id="${i._id}"/>
    <h3>${i.title}</h3>
    <p>${i.author}</p>
    </li>
    `).join("");t.insertAdjacentHTML("afterbegin",a);const o=e.split(" "),s=o[o.length-1],l=document.querySelector(".selected-category-accent");l.textContent=s;const c=document.querySelector(".selected-category-title"),u=o.slice(0,-1).join(" ");c.insertAdjacentHTML("afterbegin",u)}
//# sourceMappingURL=commonHelpers.js.map
