import React, { useState } from 'react'
import { addBook } from '../services/api'
import { Routes,Route,Link, useNavigate } from 'react-router-dom';


 const BookForm:React.FC = ()=> {
    const [title,setTitle] = useState('');
    const [author ,setAuthor] = useState('');
    const [isbn,setIsbn] = useState('');

    const navigate = useNavigate();
    const handleSubmit = async (e:React.FormEvent)=>{
e.preventDefault();
await addBook(title,author,isbn);
setTitle('');
setAuthor('');
setIsbn('');
navigate('/adminBooks')
    }

  return (

    
<div className="bg-gray-100">

<nav className="bg-blue-600 p-4">
  <div className="container mx-auto flex justify-between items-center">
  <Link  to='/' className='text-white text-2xl font-bold'>Admin Dashboard</Link>
    <div>

    <Link  to='/admin' className='text-white hover:text-gray-200 mx-2'>Members</Link>
    <Link  to='/adminBooks' className='text-white hover:text-gray-200 mx-2'>Books</Link>

     
    </div>
  </div>
</nav>


<main className="container mx-auto p-6">
<div>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
  <h1 className='w-full px-4 py-2 text-dark rounded focus:outline-none focus:bg-blue-600'>Add Book</h1>
  <div className="mb-4">
    <input 
    required
      type="text" 
      value={title} 
      placeholder="Title" 
      onChange={e => setTitle(e.target.value)} 
      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  <div className="mb-4">
    <input 
    required
      type="text" 
      value={author} 
      placeholder="Author" 
      onChange={e => setAuthor(e.target.value)} 
      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  <div className="mb-4">
    <input 
    required
      type="text" 
      value={isbn} 
      placeholder="ISBN" 
      onChange={e => setIsbn(e.target.value)} 
      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  <button 
    type="submit" 
    className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
  >
    Add Book
  </button>
</form>

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

export default BookForm
