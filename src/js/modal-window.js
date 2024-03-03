import {getBookById} from './API'

import * as basicLightbox from 'basiclightbox'
import 'basiclightbox/dist/basicLightbox.min.css';

import amazon from '../img/amazon.png';
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

}




function loadFromLs (key){
    const data = localStorage.getItem(key);

    try{
        const result = JSON.parse(data);
        return result;
    } catch{
        return data;
    }
}


const refreshLS = data => e => {
e.preventDefault();
if(e.target.textContent === 'Remove from the shopping list'){
    e.target.textContent = 'Add to shopping list';
    // e.target.classList.remove('mobileWidth');

    const indexToRemove = addedBooks.findIndex(book => book._id === data._id);
    addedBooks.splice(indexToRemove, 1);
    // removeCongratulation();
    // removeBookMessage();
} else {
    e.target.textContent = 'Remove from the shopping list';
    // e.target.classList.add('mobileWidth');
    addedBooks.push(data);
    // addCongratulation();
    // addBookMessage();
} 
localStorage.setItem(localeStorageKey, JSON.stringify(addedBooks))
};



function createModalWindow ({book_image,  title, author, description, buy_links,}){

    if(description === ''){ description = 'Book description has not been added yet...'};

    const instance = basicLightbox.create(
` <button type="button" class="closeModalBtn">
<svg>
<use href="../img/sprite.svg#icon-x-close"></use>
</svg>
</button>
<img src=""${book_image} alt="${title}" class="img-modal"/>
<h2 class="title-modal">${title}</h2>
<p class="author-modal">${author}</p>
<p class="description-modal">${description}</p>
<ul class="buy-links-container"></ul>
<button class="addBtn" type="submit">Add to shopping list</button>
`, {
     onShow: instance => {
        // document.body.style.overflow = 'hidden';

        const closeBtn = instance.element().querySelector('.closeModalBtn');
        closeBtn.onclick = () => instance.close();
     }
     ,
     onClose: instance => {
        // document.body.style.overflow = 'visible';
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