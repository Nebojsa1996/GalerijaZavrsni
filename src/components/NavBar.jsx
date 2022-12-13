import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {

    const { logout } = useAuth();
    const handleLogout = async () => {
        await logout();

    };

    const { user } = useAuth();

    return (
        <div>
            <h2>GALLERIES APP</h2>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

                <ul class="navbar-nav">
                    {!user ? (
                        <>
                            <li class="nav-item active">
                                <Link class="nav-link" to="/">All Galleries</Link>
                            </li>
                            <li class="nav-item active">
                                <Link class="nav-link" to="/my-galleries">My Galleries</Link>
                            </li>
                            <li class="nav-item active">
                                <Link class="nav-link" to="/create">Create New Gallery</Link>
                            </li>
                            <div>
                                <h4 class="">Wellcome, {user && user.first_name + ' ' + user.last_name}</h4>
                            </div>
                            <button class="btn btn-primary" onClick={handleLogout}>Logout</button>

                        </>
                    ) : (
                        <>
                            <li class="nav-item active">
                                <Link to="/" class="nav-link">All Galleries</Link>
                            </li>
                            <li class="nav-item active">
                                <Link to="/login" class="nav-link">Login</Link>
                            </li>
                            <li class="nav-item active">

                                <Link to="/register" class="nav-link">Register</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    );
}