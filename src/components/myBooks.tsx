import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Routes,Route,Link } from 'react-router-dom';
import { borrowBook,returnBook } from '../services/api';

const MyBooks:React.FC = ()=> {

    interface Book {
        _id: string;
        title: string;
        author: string;
        isbn:string
        
    }

    // const handleSubmit = async (e:React.FormEvent)=>{
    //     e.preventDefault();
    //     await borrowBook(memberId,isbn);
    //     setMemberId('');
    //     setIsbn('');
    //         }

    const [books,setBooks] = useState<Book[]>([]);

    useEffect(() => {
        axios.get('http://localhost:5000/myBooks')
            .then((response) => {
                setBooks(response.data.books);
                console.log(response.data.books);
            })
            .catch((error) => {
                console.error('Error fetching books:', error);
            });
    }, []);

 
  return (
    <div className="bg-gray-100">

  <nav className="bg-blue-600 p-4">
    <div className="container mx-auto flex justify-between items-center">
    <Link  to='/' className='text-white text-2xl font-bold'>My Library</Link>
      <div>
    <Link  to='/borrow' className='text-white hover:text-gray-200 mx-2'>Borrow Book</Link>
    <Link  to='/return' className='text-white hover:text-gray-200 mx-2'>Return Book</Link>
       
      </div>
    </div>
  </nav>


  <main className="container mx-auto p-6">
    
  {
   books.length > 0 ? (
       <div className="flex flex-wrap justify-start">
           {books.map((book) => (
               <div className="max-w-sm w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2" key={book._id}>
                   <a href="#">
                       <img className="rounded-t-lg h-48 w-full object-cover" src="https://img.freepik.com/free-photo/beautiful-landscape-from-magazine-coming-life_23-2151158544.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1717718400&semt=ais_user" alt="" />
                   </a>
                   <div className="p-5 h-48 overflow-hidden">
                       <a href="#">
                           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.title}</h5>
                       </a>
                       <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Author: {book.author}</p>
                       <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">ISBN: {book.isbn}</p>
                       {/* <a  href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                           Borrow Book
                           <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                               <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                           </svg>
                       </a> */}
                   </div>
               </div>
           ))}
       </div>
   ) : (
       <div>No books available</div>
   )
}



  
  </main>


 
  <footer className="bg-blue-600 p-4 mt-8 absolute bottom-0 w-full">
    <div className="container mx-auto text-center text-white">
      © 2024 MyWebsite. All rights reserved.
    </div>
  </footer>

</div>
  )
}

export default MyBooks
