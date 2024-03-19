import { getCategoriesBooks } from './API';
import { getBooksByCategory } from './API';
import { fetchBooks } from './best-sellers';
import { onClickGalleryImg } from './modal-window';
const listCategories = document.querySelector('.list-categories');

//Відмалювали категорії

categoriesData();

async function categoriesData() {
  try {
    const result = await getCategoriesBooks();
    const sorted = result.sort((a, b) =>
      a.list_name.localeCompare(b.list_name)
    );
    const list = categoriesTemplate(sorted);
    listCategories.insertAdjacentHTML('beforeend', list);
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
}

function categoryTemplate({ list_name }) {
  const markup = `
     <li class="item-categories">${list_name}</li>
    `;
  return markup;
}

function categoriesTemplate(res) {
  const markup = res.map(categoryTemplate).join('');
  return markup;
}

//Виділяємо обрану категорію і робимо розмімтку для неї

const bestBooksContainer = document.querySelector('.best-books-container');
const firstItemCategory = document.querySelector('.item-categories');
firstItemCategory.classList.add('active');

document.addEventListener('DOMContentLoaded', () => {
  if (listCategories) {
    listCategories.addEventListener('click', event => {
      const clickedCategory = event.target.closest('.item-categories');
      if (!clickedCategory) return;

      bestBooksContainer.replaceChildren();
      bestBooksContainer.insertAdjacentHTML(
        'afterbegin',
        `
          <h1 class="selected-category-title"> <span class="selected-category-accent"></span></h1>
          <ul class="book-list-category"></ul>
        `
      );

      const bookListCategory = document.querySelector('.book-list-category');
      bookListCategory.addEventListener('click', onClickGalleryImg);

      let category = clickedCategory.textContent.trim();
      if (category === 'All Categories') {
        fetchBooks();
        if (window.innerWidth < 768) {
          scrollTitleUp();
        }
      } else {
        displayBooks(category);
        if (window.innerWidth < 768) {
          scrollTitleUp();
        }
      }

      document.querySelectorAll('.item-categories').forEach(category => {
        category.classList.remove('active');
      });
      clickedCategory.classList.add('active');
    });
  } else {
    console.error('Element with id "categoryList" not found');
  }
});

async function displayBooks(category) {
  const bookListCategory = document.querySelector('.book-list-category');
  bookListCategory.innerHTML = '';

  const books = await getBooksByCategory(category);
  const booksMarkup = books
    .map(book => {
      return ` <li class="selected-item-category">
    <div class="overlay-container"> 
    <img src="${book.book_image}" alt="${book.title}" data-id="${
        book._id
      }" class="selected-category-img-mob"/>
    <p class="overlay">Quick view</p>
    </div>
    <h3 class="category-title">${sliceTitle(16, book.title)}</h3>
    <p class="selected-category-text">${book.author}</p>
    </li>
    `;
    })
    .join('');
  bookListCategory.insertAdjacentHTML('afterbegin', booksMarkup);

  const categorySplit = category.split(' ');
  const lastWord = categorySplit[categorySplit.length - 1];
  const titleAccentCategory = document.querySelector(
    '.selected-category-accent'
  );
  titleAccentCategory.textContent = lastWord;
  const titleCategory = document.querySelector('.selected-category-title');
  const withoutLastWord = categorySplit.slice(0, -1);
  const firstWords = withoutLastWord.join(' ');
  titleCategory.insertAdjacentHTML('afterbegin', firstWords);
}

function sliceTitle(length, title) {
  if (title.length > length) {
    return title.slice(0, length) + '...';
  } else {
    return title;
  }
}

function scrollTitleUp() {
  const mainTitle = document.querySelector('h1');
  mainTitle.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'nearest',
  });
}
