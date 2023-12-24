import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Shared/NavBar/Navbar';
import Footer from '../Components/Shared/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;