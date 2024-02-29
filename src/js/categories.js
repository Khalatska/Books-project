import {getCategoriesBooks} from './API';
import {renderBestBooks} from './best-sellers'
const listCategories = document.querySelector('.list-categories');

//Відмалювали категорії

async function categoriesData (){
    try{
    const result = await getCategoriesBooks();
    const sorted = result.sort((a,b)=>a.list_name.localeCompare(b.list_name));
    const list = categoriesTemplate(sorted);
    listCategories.insertAdjacentHTML('beforeend', list);
    } catch(error){
        console.error('Error fetching categories:', error);
    }
}
 

function categoryTemplate ({list_name}){
    const markup = `
     <li class="item-categories">${list_name}</li>
    `
    return markup;
}

 
   function categoriesTemplate (res){
   const markup =  res.map(categoryTemplate).join('');
   return markup;
}
 categoriesData()



 const bestBooksContainer = document.querySelector('.best-books-container');
 const firstItemCategory = document.querySelector('.item-categories');
 firstItemCategory.classList.add('active');


 
 listCategories.addEventListener('click', event => {
    bestBooksContainer.innerHTML = '';
    bestBooksContainer.insertAdjacentHTML('afterbegin', `
    <h2 class="selected-category-title"><span class="selected-category-accent"></span></h2>
    <ul class="book-list-category"></ul>`);


  if(event.target && event.target.matches('li.item-categories')){
    let category = event.target.textContent;
   const allCategoriesItems = document.querySelectorAll('.item-categories');
   allCategoriesItems.forEach(category =>{
    category.classList.remove('active')
   });
   event.target.classList.add('active');
    if(category === 'All categories'){
        renderBestBooks();
        return;
    }
    // displayBooks(category);
  }
   
 });

 

 
    
 