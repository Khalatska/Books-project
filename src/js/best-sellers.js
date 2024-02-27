import {getTopBooks} from './API'

const bestBooksContainer = document.querySelector('.best-books-container');

renderBestBooks();

async function renderBestBooks(){
    bestBooksContainer.insertAdjacentHTML('afterbegin', `
    <h1 class="best-sellers-title">Best Sellers <span class="accent-books">Books</span></h1>
    <ul class="best-sellers-books"></ul>
    `);
    const bestBooksList = document.querySelector('.best-sellers-books');
        const result = await getTopBooks();
        result.map(book => {
            const markup = createBooksCard(book);
            bestBooksList.insertAdjacentHTML('beforeend', markup);
        })
}

function createBooksCard (category){
    const bookItem = category.books.map(book => createBookCard(book)).join('');
    return `<li class="best-category">
    <p class="best-category-name">${category.list_name}</p>
    <ul class="best-book-list">${bookItem}</ul>
    <button type="button" class="btn-see-more">See more</button>
    </li>`
}



function createBookCard ({book_image, title, _id, author}){
    return ` <li class="best-book-item">
    <img src="${book_image}" alt="${title}" data-id="${_id}" class="best-book-img"/>
    <h2 class="best-book-title">${sliceTitle(16, title)}</h2>
    <p class="best-book-author">${author}</p>
    </li>
    `
}

function sliceTitle(length, title){
    if(title.length> length){
       return title.slice(0, length) + '...';
    } else {
        return title;
    }
}

 