import React from "react";
import { NavLink } from "react-router-dom";


function NavBar(){
    return (
        <div>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/bookshelf">Bookshelf</NavLink>
            <NavLink exact to="/newbook">Add New Book</NavLink>
        </div>
    )
}

export default NavBar