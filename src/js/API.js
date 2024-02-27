import axios from 'axios';

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books';

export async  function getCategoriesBooks(){
    const res = await axios.get('/category-list');
    return res.data;
}

export async function getTopBooks(){
    const res = await axios.get('/top-books');
    return res.data;
}

export async function getBooksByCategory (category){
    const res = await axios.get(`/category?category=${selectedCategory}`);
    return res.data;
}

export async function getBookById(bookId){
    const res = await axios.get(`/${bookId}`);
    return res.data;
}

 
 