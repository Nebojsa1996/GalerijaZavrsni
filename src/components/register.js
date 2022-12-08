import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import AuthUser from "./AuthUser";

export default function Register() {
    const navigate = useNavigate();
    const { http, setToken } = AuthUser();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const submitForm = () => {
        http.post('./register', { name: name, email: email, password: password }).then((res) => {
            navigate('/login')
        })
    }

    return (
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <div className="card p-4">
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="test" className="form-control" placeholder="Enter email"
                            onChange={e => setName(e.target.value)}
                            id="email" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email:</label>
                        <input type="email" className="form-control" placeholder="Enter email"
                            onChange={e => setEmail(e.target.value)}
                            id="email" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password"
                            onChange={e => setPassword(e.target.value)}
                            id="pwd" />
                    </div>
                    <div className="custom-control custom-checkbox mb-3">
                        <input type="checkbox" className="custom-control-input" id="customCheck" name="example1" / >
                        <label className="custom-control-label" htmlFor="customCheck">   Accept ToS</label>
                    </div>
                    <button type="button" onClick={submitForm} className="btn btn-primary mt-4">Register</button>
                </div>
            </div>
        </div>
    )
}