import { Link } from "react-router-dom";


const Navbar = () => {

    const navLinks = <>
    <li><Link className="hover:bg-blue-100" to="/">Home</Link></li>
    <li><Link className="hover:bg-blue-100" to="/service">Service</Link></li>
    <li><Link className="hover:bg-blue-100" to="/aboutus">About Us</Link></li>
    <li><Link className="hover:bg-blue-100" to="/contactus">Contatc Us</Link></li>
    </>

    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-2xl">
                           {navLinks}
                        </ul>
                    </div>
                    <a className="text-xl btn btn-ghost"><span className="text-blue-600">JSM</span>Travels BD</a>
                </div>
                <div className="hidden navbar-center lg:flex ">
                    <ul className="px-1 menu menu-horizontal text-xl font-sans font-bold text-blue-500">
                       {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-outline">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;