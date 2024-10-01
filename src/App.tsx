import React from 'react';
import BookForm from './components/bookForm';
import MemberForm from './components/memberForm';
import HomePage from './components/homePage';
import BorrowForm from './components/borrowForm';
import ReturnForm from './components/returnForm';
import MyBooks from './components/myBooks';
import MemberIdform from './components/memberIdform';
import AdminHome from './components/AdminUserSide';
import AdminBooks from './components/AdminBooks';
import './styles/style.css'
import { Routes,Route,Link } from 'react-router-dom';

function App() {
  return (
<>

<Routes>
  <Route path='/' element={<HomePage/>}></Route>

  <Route path='/addBook' element={<BookForm/>}></Route>
  <Route path='/addMember' element={<MemberForm/>}></Route>
  <Route path='/borrow' element={<BorrowForm/>}></Route>
  <Route path='/return' element={<ReturnForm/>}></Route>
  <Route path='/myBooks' element={<MemberIdform/>}></Route>

  <Route path='/admin' element={<AdminHome/>}></Route>
  <Route path='/adminBooks' element={<AdminBooks/>}></Route>

</Routes>

</>
  );
}

export default App;
