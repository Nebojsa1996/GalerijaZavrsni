import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import AuthUser from "./AuthUser";


export default function Register() {
    
    const [FormData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    })
    const navigate = useNavigate();
    const { http } = AuthUser();
    const { first_name, last_name, email, password } = FormData;
   
    const submitForm = () => {
        axios.post("http://localhost:8000/api/register", { ...FormData}).then((res) => {
            navigate('/login');
        })
        console.log(FormData);
    }
    const onChangeHandler = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <div className="card p-4">
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="test" className="form-control" placeholder="Enter name"
                            value={first_name}
                            onChange={onChangeHandler}
                            name="first_name" />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="test" className="form-control" placeholder="Enter last name"
                            value={last_name}
                            onChange={onChangeHandler}
                            name="last_name" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email:</label>
                        <input type="email" className="form-control" placeholder="Enter email"
                            value={email}
                            onChange={onChangeHandler}
                            name="email" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password"
                            value={password}
                            onChange={onChangeHandler}
                            name="password" />
                    </div>
                    <div className="custom-control custom-checkbox mb-3">
                        <input type="checkbox" className="custom-control-input" id="customCheck" name="example1" />
                        <label className="custom-control-label" htmlFor="customCheck">Accept ToS</label>
                    </div>
                    <button type="button" onClick={submitForm} className="btn btn-primary mt-4">Register</button>
                </div>
            </div>
        </div>
    )
}