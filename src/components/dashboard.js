import { useEffect, useState } from "react";
import AuthUser from "./AuthUser";

export default function Dashboard() {
    const {user, http} = AuthUser();
    const [user_detail,setUserdetail] = useState();

    useEffect(()=>{
        fethchUserDetails();
    },[]);

    const fethchUserDetails = () => {
        http.post('/me').then((res)=> {
            console.log(res.data);
        })
    }

    return(
        <div>
            <h4>Name</h4>
            <p>{user.name}</p>
            <h4>Email</h4>
            <p>{user.email}</p>
        </div>
    )
}