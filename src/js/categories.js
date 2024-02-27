// import {getCategoriesBooks} from './API';
// const listCategories = document.querySelector('.list-categories');


// async function categoriesData (){
//     try{
//     const result = await getCategoriesBooks();
//     const sorted = result.sort((a,b)=>a.list_name.localeCompare(b.list_name));
//     const list = categoriesTemplate(sorted);
//     listCategories.insertAdjacentHTML('beforeend', list);
//     } catch(error){
//         console.error('Error fetching categories:', error);
//     }
// }


// function categoryTemplate ({list_name}){
//     const markup = `
//      <li class="item-categories">
//      <button type="submit">${list_name}</button>
//      </li>
//     `
//     return markup;
// }

// async function categoriesTemplate (res){
//    const markup =  res.map(categoryTemplate).join('');
//    return markup;
// }

//  categoriesData()
 
 
