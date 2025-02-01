import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Main from './pages/Main';
// import Guestbook from './pages/Guestbook';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/guestbook" element={<Guestbook />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
