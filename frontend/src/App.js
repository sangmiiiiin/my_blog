import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Main from './pages/Main';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Post from './pages/Detail';
import Register from './pages/Register';
import Login from './pages/Login';
import Test from './components/UserList';
import Lending from './pages/Lending';
import Mypage from './pages/Mypage';
import CartList from './pages/CartList';
// import Guestbook from './pages/Guestbook';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Lending />} />
          <Route path="/main" element={<Main />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/posts/:id' element={<Post />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/test' element={<Test />} />
          <Route path='/mypage' element={<Mypage />} />
          <Route path='/mycart' element={<CartList/>} />
          <Route path='/shirt' element={<Shirt/>} />
          <Route path='/pants' element={<Pants/>} />
          <Route path='/etc' element={<Etc/>} />
          {/* <Route path="/guestbook" element={<Guestbook />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
