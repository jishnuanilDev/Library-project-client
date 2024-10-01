import React, { useEffect, useState } from 'react'
import { borrowBook,returnBook } from '../services/api';
import axios from 'axios';
import { Routes,Route,Link } from 'react-router-dom';
const AdminHome:React.FC = ()=> {

    interface Book {
        _id: string;
        title: string;
        author: string;
        isbn: string;
        // Add any other properties your Book model has
    }
    

    interface Member {
        _id: string;
        name: string;
        memberId: string;
        borrowBooks: Book[];
    }
    


    const [members,setMembers] = useState<Member[]>([]);
    const [isbn,setIsbn] = useState('');


    interface Member {
        _id: string;
        name: string;
        memberId: string;
   
        
    }
    useEffect(() => {
        axios.get('http://localhost:5000/members')
            .then((response) => {
                setMembers(response.data.members);
                console.log(response.data.members);
            })
            .catch((error) => {
                console.error('Error fetching Members:', error);
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
<Link  to='/addMember' className='text-dark hover:bg-yellow-500  border border-gray-300 p-2 '>Add Member</Link>
<div className="relative overflow-x-auto mt-10">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                 Member Name
                </th>
                <th scope="col" className="px-6 py-3">
                    MemberID
                </th>
                <th scope="col" className="px-6 py-3">
                   Member Borrowed Books
                </th>
            </tr>
        </thead>
        <tbody>

            {members.map((member)=>(
     <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    
     <td className="px-6 py-4">
        {member.name}
     </td>
     <td className="px-6 py-4">
   {member.memberId}
     </td>
     <td className="px-6 py-4">
       {member.borrowBooks?member.borrowBooks.map((book:any)=>(
        <p>{book},</p>
       )): <p>No data available</p>}
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

export default AdminHome
