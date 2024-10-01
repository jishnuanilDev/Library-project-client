import axios from "axios";
import { title } from "process";


const api = axios.create({
     baseURL: 'http://localhost:5000'
})

export const addBook = (title:string,author:string,isbn:string)=>{
console.log('passed in addBook')
return api.post('/books',{title,author,isbn});

}

export const addMember = (name:string,memberId:string)=>{
    return api.post('/members',{name,memberId});
}


export const borrowBook = (memberId:string,isbn:string)=>{
    return api.post('/borrow',{memberId,isbn});
}

export const borrowedBooks = (memberId:string)=>{
    console.log('services ethii',memberId)
    return api.post('/myBooks',{memberId});
}

export const returnBook = (memberId:string,isbn:string)=>{
    return api.post('/return',{memberId,isbn})
}