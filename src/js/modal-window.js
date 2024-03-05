import {getBookById} from './API'

import * as basicLightbox from 'basiclightbox'
import 'basiclightbox/dist/basicLightbox.min.css';

import amazon from '../img/amazon1.png';
import apple from '../img/apple-books.png';
import noble from '../img/barnes-and-noble.png';
import booksMillion from '../img/books-a-million.png';
import bookshop from '../img/bookshop.png';
import indie from '../img/indiebound.png';


const localeStorageKey = 'shopping-list';
export default localeStorageKey;

const addedBooks = loadFromLs(localeStorageKey) || [];

export const onClickGalleryImg = async event => {
    event.preventDefault();

    if(event.target.nodeName !== 'IMG') return;


    const id = event.target.dataset.id;
    const data = await getBookById(id);

createModalWindow(data);

const addBtn = document.querySelector('.addBtn');
addBtn.addEventListener('click', refreshLS(data));

if(addedBooks.length > 0){
    const isBookAdded = addedBooks.some( book => id === book._id);
    if(isBookAdded){
        addBtn.textContent = 'Remove from the shopping list';
        addBtn.classList.add('mobileWidth')
    } else { addBtn.textContent = 'Add to shopping list'}
}

}


const refreshLS = data => e => {
    e.preventDefault();
    if(e.target.textContent === 'Remove from the shopping list'){
        e.target.textContent = 'Add to shopping list';
        e.target.classList.remove('mobileWidth');
    
        const indexToRemove = addedBooks.findIndex(book => book._id === data._id);
        addedBooks.splice(indexToRemove, 1);
        removeCongratulation();
        // removeBookMessage();
    } else {
        e.target.textContent = 'Remove from the shopping list';
        e.target.classList.add('mobileWidth');
        addedBooks.push(data);
        addCongratulation();
        // addBookMessage();
    } 
    localStorage.setItem(localeStorageKey, JSON.stringify(addedBooks))
    };


function loadFromLs (key){
    const data = localStorage.getItem(key);

    try{
        const result = JSON.parse(data);
        return result;
    } catch{
        return data;
    }
}




function createModalWindow ({book_image,  title, author, description, buy_links,}){

    if(description === ''){ description = 'Book description has not been added yet...'};

    const instance = basicLightbox.create(
`<div class="modal"> 
 <button type="button" class="modal-close-btn">
<svg class="modal-close-icon">
<use href="./img/sprite.svg#icon-x-close"></use>
</svg>
</button>
<div class="img-container">
<div class="img-top-container"> 
<img src="${book_image}" alt="${title}" class="img-modal"/>
</div>
<div class="img-bottom-container">
<h2 class="title-modal">${title}</h2>
<p class="author-modal">${author}</p>
<p class="description-modal">${description}</p>
<ul class="buy-links-container"></ul>
</div>
</div>
<button class="addBtn" type="submit">Add to shopping list</button>
</div>
`, {
     onShow: instance => {
        document.body.style.overflow = 'hidden';

        const closeBtn = instance.element().querySelector('.modal-close-btn');
        closeBtn.onclick = () => instance.close();
     }
     ,
     onClose: instance => {
        document.body.style.overflow = 'visible';
     }
    }
    );

 const linkContainers = instance.element().querySelector('.buy-links-container');

 searchBookShops({buy_links, book_image, title, author}, linkContainers);

 instance.show();

 document.addEventListener('keydown', pressEscapeKey);

 function pressEscapeKey (e){
   if(e.key === 'Escape'){
    instance.close();
    document.removeEventListener('keydown', pressEscapeKey);
   }
 }

}





function searchBookShops({buy_links, book_image, title, author}, linkContainers){

buy_links.forEach( link =>{
 const itemShop =  document.createElement('li');
 linkContainers.appendChild(itemShop);
 const linkShop = document.createElement('a');
 itemShop.appendChild(linkShop);
 const imgShop = document.createElement('img');
 linkShop.appendChild(imgShop);

 linkShop.target = '_blank';
 imgShop.alt = link.name + ' Icon';
 imgShop.className = 'img-shop';
 itemShop.className = 'item-shop';

 const url = `${book_image}`;
 const fileName = url.split('/').pop();
 const fileNameWithoutExtension = fileName.split('.')[0];

switch(link.name) {
    case 'Amazon' :
        linkShop.href = link.url;
        imgShop.src = amazon;
        break;
    case 'Apple Books':
        linkShop.href = link.url;
        imgShop.src = apple;
        imgShop.className = 'booksIconApple';
        break;
    case 'Barnes and Noble':
        linkShop.href = link.url;
        imgShop.src = noble;
        break;
    case 'Books-A-Million':
        linkShop.href = `https://www.booksamillion.com/p/${title}/${author}/${fileNameWithoutExtension}`;
        imgShop.src = booksMillion;
        break;
    case 'Bookshop':
        linkShop.href = `https://bookshop.org/search?keywords=${fileNameWithoutExtension}`;
        imgShop.src = bookshop;
        break;
    default:
        linkShop.href = `https://bookshop.org/p/books/atomic-habits-an-easy-proven-way-to-build-good-habits-break-bad-ones-james-clear/12117739?ean=${fileNameWithoutExtension}`;
        imgShop.src = indie;
        break;
}
})
}

function addCongratulation(){
    const modalElem = document.querySelector('.modal');
   const congratulation = document.createElement('p');
   congratulation.className = 'congratulation';
   congratulation.textContent = 'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
   modalElem.appendChild(congratulation);
}

function removeCongratulation(){
    const congratulation = document.querySelector('.congratulation');
    if(congratulation) congratulation.remove();
}