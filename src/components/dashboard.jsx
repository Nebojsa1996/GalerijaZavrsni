import { useEffect, useState } from "react";
import AuthUser from "./AuthUser";

export default function Dashboard() {
    const { http } = AuthUser();
    const [user_detail, setUserdetail] = useState('');

    useEffect(() => {
        fethchUserDetails();
    }, []);

    const fethchUserDetails = () => {
        http.post('/me').then((res) => {
            setUserdetail(res.data);
        })
    }

    function renderElement(){
        if (user_detail) {
            return <div>
                <h4>Name</h4>
                <p>{user_detail.name}</p>
                <h4>Email</h4>
                <p>{user_detail.email}</p>
            </div>
        } else {
            return <p>Loading.....</p>
        }
    }

    return (
        <div>
            {renderElement()}
        </div>
    )
}