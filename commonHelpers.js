import{a as l}from"./assets/vendor-0cb09735.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const i={closeMenuElem:document.querySelector(".btn-close-menu"),openMenuElem:document.querySelector(".btn-open-menu"),modalMenuElem:document.querySelector(".mob-menu")};i.closeMenuElem.addEventListener("click",()=>{i.modalMenuElem.classList.remove("is-visible")});i.openMenuElem.addEventListener("click",()=>{i.modalMenuElem.classList.add("is-visible")});l.defaults.baseURL="https://books-backend.p.goit.global/books";async function k(){return(await l.get("/category-list")).data}async function h(){return(await l.get("/top-books")).data}async function m(e){return(await l.get(`/category?category=${e}`)).data}const u=document.querySelector(".best-books-container");g();async function g(){u.insertAdjacentHTML("afterbegin",`
    <h1 class="best-sellers-title">Best Sellers <span class="accent-books">Books</span></h1>
    <ul class="best-sellers-books"></ul>
    `);const e=document.querySelector(".best-sellers-books");(await h()).map(r=>{const o=L(r);e.insertAdjacentHTML("beforeend",o)}),document.querySelectorAll(".btn-see-more").forEach(r=>{r.addEventListener("click",S)})}function L(e){const t=e.books.map(n=>b(n)).join("");return`<li class="best-category">
    <p class="best-category-name">${e.list_name}</p>
    <ul class="best-book-list">${t}</ul>
    <button value="${e.list_name}" type="button" class="btn-see-more">See more</button>
    </li>`}function b({book_image:e,title:t,_id:n,author:r}){return` <li class="best-book-item">
    <img src="${e}" alt="${t}" data-id="${n}" class="best-book-img" width="375" height="485"/>
    <h2 class="best-book-title">${M(16,t)}</h2>
    <p class="best-book-author">${r}</p>
    </li>
    `}function M(e,t){return t.length>e?t.slice(0,e)+"...":t}async function S(e){e.preventDefault();const t=await m(e.target.value),n=$(e.target.value),r=t.map(s=>`
        <h2 class="selected-category-title">${n}</h2>
        <ul class="book-list-category">${b(s)}</ul>`);u.innerHTML="",u.insertAdjacentHTML("afterbegin",r),window.scrollTo({top:0,behavior:"smooth"}),document.querySelectorAll(".item-categories").forEach(s=>{s.textContent===e.target.value?s.classList.add("active"):s.classList.remove("active")})}function $(e){const t=e.split(" "),n=t[t.length-1];return`${t.slice(0,-1).join(" ")} <span class="accent-books">${n}</span>`}const f=document.querySelector(".list-categories");async function v(){try{const t=(await k()).sort((r,o)=>r.list_name.localeCompare(o.list_name)),n=E(t);f.insertAdjacentHTML("beforeend",n)}catch(e){console.error("Error fetching categories:",e)}}function C({list_name:e}){return`
     <li class="item-categories">${e}</li>
    `}function E(e){return e.map(C).join("")}v();const d=document.querySelector(".best-books-container"),T=document.querySelector(".item-categories");T.classList.add("active");f.addEventListener("click",e=>{if(d.innerHTML="",d.insertAdjacentHTML("afterbegin",`
    <h2 class="selected-category-title"> <span class="selected-category-accent"></span></h2>
    <ul class="book-list-category"></ul>`),e.target&&e.target.matches("li.item-categories")){let t=e.target.textContent;if(document.querySelectorAll(".item-categories").forEach(r=>{r.classList.remove("active")}),e.target.classList.add("active"),t==="All Categories"){g();return}q(t)}});async function q(e){const t=document.querySelector(".book-list-category");t.innerHTML="";const r=(await m(e)).map(a=>` <li>
    <img src="${a.book_image}" alt="${a.title}" data-id="${a._id}"/>
    <h3>${a.title}</h3>
    <p>${a.author}</p>
    </li>
    `).join("");t.insertAdjacentHTML("afterbegin",r);const o=e.split(" "),s=o[o.length-1],c=document.querySelector(".selected-category-accent");c.textContent=s;const p=document.querySelector(".selected-category-title"),y=o.slice(0,-1).join(" ");p.insertAdjacentHTML("afterbegin",y)}
//# sourceMappingURL=commonHelpers.js.map
