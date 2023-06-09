import React from 'react';
import { Routes , Route } from 'react-router-dom';
import About from './pages/About'
import Blog from './pages/Blog'
import Home  from './pages/Home'
import Shop from './pages/Shop'
import Contact from './pages/Contact';
const Router = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/Shop' element={<Shop/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </div>
    );
}

export default Router;
