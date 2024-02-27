import{a as i}from"./assets/vendor-0cb09735.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const c={closeMenuElem:document.querySelector(".btn-close-menu"),openMenuElem:document.querySelector(".btn-open-menu"),modalMenuElem:document.querySelector(".mob-menu")};c.closeMenuElem.addEventListener("click",()=>{c.modalMenuElem.classList.remove("is-visible")});c.openMenuElem.addEventListener("click",()=>{c.modalMenuElem.classList.add("is-visible")});i.defaults.baseURL="https://books-backend.p.goit.global/books";async function a(){return(await i.get("/top-books")).data}const u=document.querySelector(".best-books-container");d();async function d(){u.insertAdjacentHTML("afterbegin",`
    <h1 class="best-sellers-title">Best Sellers <span class="accent-books">Books</span></h1>
    <ul class="best-sellers-books"></ul>
    `);const s=document.querySelector(".best-sellers-books");(await a()).map(r=>{const n=m(r);s.insertAdjacentHTML("beforeend",n)})}function m(s){const t=s.books.map(r=>b(r)).join("");return`<li class="best-category">
    <p class="best-category-name">${s.list_name}</p>
    <ul class="best-book-list">${t}</ul>
    <button type="button" class="btn-see-more">See more</button>
    </li>`}function b({book_image:s,title:t,_id:r,author:n}){return` <li class="best-book-item">
    <img src="${s}" alt="${t}" data-id="${r}" class="best-book-img"/>
    <h2 class="best-book-title">${f(16,t)}</h2>
    <p class="best-book-author">${n}</p>
    </li>
    `}function f(s,t){return t.length>s?t.slice(0,s)+"...":t}
//# sourceMappingURL=commonHelpers.js.map
