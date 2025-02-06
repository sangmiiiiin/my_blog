import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Main from './pages/Main';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Post from './pages/Detail';
// import Guestbook from './pages/Guestbook';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/posts/:id' element={<Post />} />
          {/* <Route path="/guestbook" element={<Guestbook />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
