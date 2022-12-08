import { Routes, Route, Link } from 'react-router-dom';
import Home from "../components/home";
import Dashboard from "../components/dashboard";
import AuthUser from '../components/AuthUser';
import Register from '../components/register';

function Auth() {

    const  {token,logout} = AuthUser;
    const logoutUser = () => {
        if(token != undefined) {
            logout();
        }
    }

    return (
        <div>
            <link ></link>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="./dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <span role="button" className="nav-link" onClick={logoutUser}>Logout</span>
                    </li>
                </ul>
            </nav>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Dashboard />} />
                </Routes>
            </div>
        </div>
    );
}

export default Auth;