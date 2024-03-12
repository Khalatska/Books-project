import amazon from '../img/amazon1.png';
import apple from '../img/apple-books.png';

const shoppedBooks = document.querySelector('.shopped-books');

const storedBooks = JSON.parse(localStorage.getItem('shopping-list')) || [];

shoppedBooks.insertAdjacentHTML('beforeend', renderShopList(storedBooks));

function renderShopList(storedBooks) {
  return storedBooks
    .map(
      ({
        book_image,
        title,
        list_name,
        description,
        author,
        buy_links,
        _id,
      }) => {
        if (!description) {
          description =
            'Sorry, but this book does not have an accessible description. Try reading it on the website of one of the shops';
        }
        return `<li class="bought-book">
        <div class="img-container-shopping"> 
    <img src="${book_image}" alt="${title}" class="img-bought-book"/> </div>
    <div class="description-container">
    <h2 class="bought-book-title">${title}</h2>
    <p class="bought-book-name">${sliceDescription(16, list_name)}</p>
    <p class="bought-book-description">${sliceDescription(100, description)}</p>
    <div class="author-shop-links">
    <p class="bought-book-author">${sliceDescription(15, author)}</p>
    <ul class="shopping-shops">
      <li> 
    <a href="${
      buy_links.filter(({ name }) => {
        return name === 'Amazon';
      }).url
    }" target="_blanket" class="shopping-shops-link"><img src="${amazon}" alt="Amazon" class="img-shop-icon"/></a>
    </li>
    <li> 
    <a href="${
      buy_links.filter(({ name }) => {
        return name === 'Apple';
      }).url
    }" target="_blank" class="shopping-shops-link"><img src="${apple}" alt="Apple Books" class="img-shop-icon-apple"/></a>
    </li>
    </ul>
    </div>
    </div>

    <button type="button" data-id=${_id} class="btn-delete-book">
    <svg class="trash-icon">
    <use href="./img/sprite.svg#icon-trash"></use></svg></button>
 
    </li>`;
      }
    )
    .join('');
}

addDeleteBTn();

function addDeleteBTn() {
  const btnDelete = document.querySelectorAll('.btn-delete-book');

  btnDelete.forEach(btn => {
    btn.addEventListener('click', event => {
      const bookId = event.currentTarget.dataset.id;
      deleteBook(bookId);
    });
  });
}

function deleteBook(bookId) {
  const bookIndex = storedBooks.findIndex(book => bookId === book._id);
  if (bookIndex !== -1) {
    storedBooks.splice(bookIndex, 1);
    localStorage.setItem('shopping-list', JSON.stringify(storedBooks));
    updateBooks();
    shoppedBooks.innerHTML = '';
    shoppedBooks.insertAdjacentHTML('beforeend', renderShopList(storedBooks));

    addDeleteBTn();
  }
}

updateBooks();

function updateBooks() {
  const containerEmpty = document.querySelector('.container-empty-list');
  if (storedBooks.length === 0) {
    containerEmpty.style.display = 'block';
    shoppedBooks.style.display = 'none';
  } else {
    containerEmpty.style.display = 'none';
    shoppedBooks.style.display = 'flex';
  }
}

function sliceDescription(length, title) {
  if (title.length > length) {
    return title.slice(0, length) + '...';
  } else {
    return title;
  }
}
