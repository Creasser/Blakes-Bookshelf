import React from "react";
import { NavLink } from "react-router-dom";


function NavBar(){
    return (
        <div className="navLinkContainer">
            <NavLink className='navLinks' exact to="/">Home</NavLink>
            <NavLink className='navLinks' exact to="/bookshelf">Bookshelf</NavLink>
            <NavLink className='navLinks' exact to="/newbook">Add New Book</NavLink>
        </div>
    )
}

export default NavBar