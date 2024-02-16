//================= React Packages ======================
import React from 'react'
import axios from 'axios'
import {useState} from 'react'

//================== Custom CSS ==================

import '../Styles/usersignup.css'


// ================ UserSignUp Component ==================

const UserSignUp = () => {

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    
    const handleSubmit = async (event) => {
        if(first_name === '' || last_name === '' || username === '' || email === '' || password === ''){
            alert("Please enter all the details!");
        }
        else {event.preventDefault();
        const user = {
          first_name: first_name,
          last_name: last_name,
          username: username,
          email: email,
          password: password,
        }
        await axios.post('http://127.0.0.1:8000/auth/users/', user)
          .then(res=>{
            console.log(res);
            console.log(res.data);
            window.location = "http://localhost:3000/userlogin" //This line of code will redirect you once the submission is succeed
          }, (error) => {
            alert("Username already taken or Password is not strong enough!");
            console.log(error);
          })}
      }

    return(
        
        <>
            <nav className="navbar navbar-dark nav-body">
                <a className="navbar-brand branding" href="home">RESWEB</a>
                    <div className="navbar-nav ">
                        <a className="nav-link active links" href="userlogin">Log In</a>
                    </div>    
            </nav>


            <form className = "form-box" onSubmit = {handleSubmit}>

                <div className="form-head">Sign Up</div>

                <div className="form-group">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" className="form-control" id="firstname" placeholder="Enter First Name" name = "first_name" onChange = {(e) => setFirstName(e.target.value)}/>   
                </div>

                <div className="form-group">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" className="form-control" id="lastname" placeholder="Enter Last Name" name = "last_name" onChange = {(e) => setLastName(e.target.value)}/>   
                </div>

                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="username" className="form-control" id="username" placeholder="Enter Username" name = "username" onChange = {(e) => setUsername(e.target.value)}/>   
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter Email" name = "email" onChange = {(e) => setEmail(e.target.value)}/>   
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" name = "password" onChange = {(e) => setPassword(e.target.value)}/>   
                </div>

                <button type='submit' className="submit">Submit</button>
            </form>
        </>
           
    );
}

export default UserSignUp;