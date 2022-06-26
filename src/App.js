import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Post from "./pages/Post";
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
      <>
          <Routes>
              <Route path="/index.html" element={<Home />} />
              <Route path='/about.html' element={<About/>}/>
              <Route path="/post.html" element={<Post />} />
              <Route path='/contact.html' element={<Contact/>}/>
          </Routes>
      </>
  );
}

export default App;
