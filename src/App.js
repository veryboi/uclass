import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Search from './pages/Search';
import Messages from './pages/Messages';
import Navbar from "./components/Navbar";

const App = (props) => {
    const wrapNavbar = (item, pathName) => {
        return (
            <div className="flex flex-row bg-gray-200">
                <Navbar focus={pathName}/>
                {item}
            </div>
        );
    };

    return (
        <Router>
        <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/dashboard' element={wrapNavbar(<Dashboard/>, "Dashboard")} />
            <Route path='/search' element={wrapNavbar(<Search/>, "Search")} />
            <Route path='/messages' element={wrapNavbar(<Messages/>, "Messages")} />
        </Routes>

        </Router>
    );
};
export default App;
