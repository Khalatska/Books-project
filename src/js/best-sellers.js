import { getTopBooks } from './API';
import { getBooksByCategory } from './API';
import { onClickGalleryImg } from './modal-window';

const bestBooksContainer = document.querySelector('.best-books-container');

renderBestBooks();
addListenerToCards();

export async function renderBestBooks() {
  bestBooksContainer.insertAdjacentHTML(
    'afterbegin',
    `
        <h1 class="best-sellers-title">Best Sellers <span class="accent-books">Books</span></h1>
        <ul class="best-sellers-books"></ul>
    `
  );
  const bestBooksList = document.querySelector('.best-sellers-books');

  try {
    const result = await getTopBooks();

    if (result.length === 0) {
      bestBooksList.innerHTML = `<p>No popular books found</p>`;
    } else {
      result.forEach(book => {
        const markup = createBooksCard(book);
        bestBooksList.insertAdjacentHTML('beforeend', markup);
      });

      const btnSeeMore = document.querySelectorAll('.btn-see-more');
      btnSeeMore.forEach(btn => {
        btn.addEventListener('click', handleSeeMore);
      });
    }
  } catch (error) {
    console.error('Error fetching top books:', error);
  }
}

function createBooksCard(category) {
  const bookItem = category.books.map(book => createBookCard(book)).join('');
  return `<li class="best-category">
    <p class="best-category-name">${category.list_name}</p>
    <ul class="best-book-list">${bookItem}</ul>
    <button value="${category.list_name}" type="button" class="btn-see-more">See more</button>
    </li>`;
}

function createBookCard({ book_image, title, _id, author }) {
  return ` <li class="best-book-item">
    <div class="overlay-container"> 
    <img src="${book_image}" alt="${title}" data-id="${_id}" class="best-book-img" width="375" height="485"/>
    <p class="overlay">Quick view</p>
    </div>
    <h2 class="best-book-title">${sliceTitle(16, title)}</h2>
    <p class="best-book-author">${author}</p>
    </li>
    `;
}

function sliceTitle(length, title) {
  if (title.length > length) {
    return title.slice(0, length) + '...';
  } else {
    return title;
  }
}

async function handleSeeMore(e) {
  e.preventDefault();
  const books = await getBooksByCategory(e.target.value);
  const targetTitle = changeColor(e.target.value);
  const markupBooks = books.map(book => createBookCard(book)).join('');

  bestBooksContainer.innerHTML = `
        <h2 class="selected-category-title">${targetTitle}</h2>
        <ul class="book-list-category">${markupBooks}</ul>
    `;

  window.scrollTo({ top: 0, behavior: 'smooth' });
  const categoriesItems = document.querySelectorAll('.item-categories');
  categoriesItems.forEach(item => {
    item.textContent === e.target.value
      ? item.classList.add('active')
      : item.classList.remove('active');
  });
}

function changeColor(name) {
  const splitName = name.split(' ');
  const lastWord = splitName[splitName.length - 1];
  const withoutLastWord = splitName.slice(0, -1);
  const firstWords = withoutLastWord.join(' ');

  return `${firstWords} <span class="accent-books">${lastWord}</span>`;
}

function addListenerToCards() {
  bestBooksContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('best-book-img')) {
      onClickGalleryImg(event);
    }
  });
}
