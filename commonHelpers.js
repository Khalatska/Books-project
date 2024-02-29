import{a as i}from"./assets/vendor-0cb09735.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const n={closeMenuElem:document.querySelector(".btn-close-menu"),openMenuElem:document.querySelector(".btn-open-menu"),modalMenuElem:document.querySelector(".mob-menu")};n.closeMenuElem.addEventListener("click",()=>{n.modalMenuElem.classList.remove("is-visible")});n.openMenuElem.addEventListener("click",()=>{n.modalMenuElem.classList.add("is-visible")});i.defaults.baseURL="https://books-backend.p.goit.global/books";async function d(){return(await i.get("/category-list")).data}async function b(){return(await i.get("/top-books")).data}const f=document.querySelector(".best-books-container");u();async function u(){f.insertAdjacentHTML("afterbegin",`
    <h1 class="best-sellers-title">Best Sellers <span class="accent-books">Books</span></h1>
    <ul class="best-sellers-books"></ul>
    `);const e=document.querySelector(".best-sellers-books");(await b()).map(r=>{const c=g(r);e.insertAdjacentHTML("beforeend",c)})}function g(e){const t=e.books.map(r=>p(r)).join("");return`<li class="best-category">
    <p class="best-category-name">${e.list_name}</p>
    <ul class="best-book-list">${t}</ul>
    <button type="button" class="btn-see-more">See more</button>
    </li>`}function p({book_image:e,title:t,_id:r,author:c}){return` <li class="best-book-item">
    <img src="${e}" alt="${t}" data-id="${r}" class="best-book-img" width="375" height="485"/>
    <h2 class="best-book-title">${y(16,t)}</h2>
    <p class="best-book-author">${c}</p>
    </li>
    `}function y(e,t){return t.length>e?t.slice(0,e)+"...":t}const m=document.querySelector(".list-categories");async function k(){try{const t=(await d()).sort((c,s)=>c.list_name.localeCompare(s.list_name)),r=L(t);m.insertAdjacentHTML("beforeend",r)}catch(e){console.error("Error fetching categories:",e)}}function h({list_name:e}){return`
     <li class="item-categories">${e}</li>
    `}function L(e){return e.map(h).join("")}k();const l=document.querySelector(".best-books-container"),E=document.querySelector(".item-categories");E.classList.add("active");m.addEventListener("click",e=>{if(l.innerHTML="",l.insertAdjacentHTML("afterbegin",`
    <h2 class="selected-category-title"><span class="selected-category-accent"></span></h2>
    <ul class="book-list-category"></ul>`),e.target&&e.target.matches("li.item-categories")){let t=e.target.textContent;if(document.querySelectorAll(".item-categories").forEach(c=>{c.classList.remove("active")}),e.target.classList.add("active"),t==="All categories"){u();return}}});
//# sourceMappingURL=commonHelpers.js.map
