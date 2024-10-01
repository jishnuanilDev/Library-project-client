import React, { useEffect, useState } from 'react'
import { borrowBook,returnBook } from '../services/api';
import axios from 'axios';
import { Routes,Route,Link } from 'react-router-dom';
const AdminBooks:React.FC = ()=> {

    interface Book {
        _id: string;
        title: string;
        author: string;
        isbn: string;
        // Add any other properties your Book model has
    }


    const [Books,setBooks] = useState<Book[]>([]);


    useEffect(() => {
        axios.get('http://localhost:5000/books')
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
  <Link  to='/admin' className='text-white text-2xl font-bold'>Admin Dashboard</Link>
    <div>

    <Link  to='/admin' className='text-white hover:text-gray-200 mx-2'>Members</Link>
    <Link  to='/adminBooks' className='text-white hover:text-gray-200 mx-2'>Books</Link>

     
    </div>
  </div>
</nav>


<main className="container mx-auto p-6">
<div>
<Link  to='/addBook' className='text-dark hover:bg-yellow-500  border border-gray-300 p-2 '>Add Book</Link>
<div className="relative overflow-x-auto mt-10">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
             Book Title
                </th>
                <th scope="col" className="px-6 py-3">
                   Book Author
                </th>
                <th scope="col" className="px-6 py-3">
                  Book ISBN
                </th>
            </tr>
        </thead>
        <tbody>

            {Books.map((Book)=>(
     <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    
     <td className="px-6 py-4">
        {Book.title}
     </td>
     <td className="px-6 py-4">
   {Book.author}
     </td>
     <td className="px-6 py-4">
   {Book.isbn}
     </td>
 </tr>
            ))}
       
            
        </tbody>
    </table>
</div>


    </div>
</main>



<footer className="bg-blue-600 p-4 mt-8 absolute bottom-0 w-full">
    <div className="container mx-auto text-center text-white">
      © 2024 MyWebsite. All rights reserved.
    </div>
  </footer>

</div>




    
  )
}

export default AdminBooks
