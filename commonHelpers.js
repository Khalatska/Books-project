import{a}from"./assets/vendor-0cb09735.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const c={closeMenuElem:document.querySelector(".btn-close-menu"),openMenuElem:document.querySelector(".btn-open-menu"),modalMenuElem:document.querySelector(".mob-menu")};c.closeMenuElem.addEventListener("click",()=>{c.modalMenuElem.classList.remove("is-visible")});c.openMenuElem.addEventListener("click",()=>{c.modalMenuElem.classList.add("is-visible")});a.defaults.baseURL="https://books-backend.p.goit.global/books";async function l(){return(await a.get("/category-list")).data}async function u(){return(await a.get("/top-books")).data}const m=document.querySelector(".list-categories");async function d(){try{const t=(await l()).sort((n,s)=>n.list_name.localeCompare(s.list_name)),r=f(t);m.insertAdjacentHTML("beforeend",r)}catch(e){console.error("Error fetching categories:",e)}}function b({list_name:e}){return`
     <li class="item-categories">${e}</li>
    `}function f(e){return e.map(b).join("")}d();const p=document.querySelector(".best-books-container");g();async function g(){p.insertAdjacentHTML("afterbegin",`
    <h1 class="best-sellers-title">Best Sellers <span class="accent-books">Books</span></h1>
    <ul class="best-sellers-books"></ul>
    `);const e=document.querySelector(".best-sellers-books");(await u()).map(r=>{const n=y(r);e.insertAdjacentHTML("beforeend",n)})}function y(e){const t=e.books.map(r=>k(r)).join("");return`<li class="best-category">
    <p class="best-category-name">${e.list_name}</p>
    <ul class="best-book-list">${t}</ul>
    <button type="button" class="btn-see-more">See more</button>
    </li>`}function k({book_image:e,title:t,_id:r,author:n}){return` <li class="best-book-item">
    <img src="${e}" alt="${t}" data-id="${r}" class="best-book-img" width="375" height="485"/>
    <h2 class="best-book-title">${h(16,t)}</h2>
    <p class="best-book-author">${n}</p>
    </li>
    `}function h(e,t){return t.length>e?t.slice(0,e)+"...":t}
//# sourceMappingURL=commonHelpers.js.map
