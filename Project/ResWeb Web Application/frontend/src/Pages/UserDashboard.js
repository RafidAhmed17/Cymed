// React Packages
import {useState, useEffect} from 'react';
import axios from 'axios';

//================== Custom CSS ==================

import '../Styles/userdashboard.css'

// ================ Components ==================

import UserNavbar from '../Components/UserNavBar';


// ================ UserDashboard Component ==================

const UserDashboard = () => {

    const [user, setUser] = useState([]);

    useEffect(()=>{

        const getUser = async() => {
    
            const token = localStorage.getItem('token');
            console.log('Access JWT token: ' + token);
            await axios.get("http://127.0.0.1:8000/user/userdashboard", 
                { headers: {'Authorization': "JWT " + token,
                'Content-Type': 'application/json'} })
            .then(res=>{
                console.log(res);
                setUser(res.data);
                console.log(user);
            }, 
            (error) => {
                console.log(error);
              })
        }
    
        getUser();

    }, [])



    return(

        <>

            <UserNavbar/>            
            <div className="main">
                <h2>Dashboard</h2>
                <br />
                
                {user.map(item => {
                    return(
                        <div className="profile">
                            <p>Full Name: {item.first_name + " " + item.last_name}</p>
                            <p>Username: {item.username}</p>
                            <p>Email: {item.email}</p>
                        </div>
                    );
                })}
                
            </div>
        </>
        
    );
}

export default UserDashboard;