//================= React Packages ======================
import {React} from 'react'
import {useState} from 'react'
import axios from 'axios'

//================== Custom CSS ==================

import '../Styles/userlogin.css'


// ================ UserLogin Component ==================

const UserLogin = () => {

let token = '';
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = async (event) => {
    
    if(username === '' || password === ''){
        alert("Please enter all the details!");
    }
    
    else {event.preventDefault();
    const user = {
        username: username,
        password: password,
    }
    await axios.post('http://127.0.0.1:8000/auth/jwt/create/', user)
      .then(res=>{
        console.log(res);
        console.log(res.data);
        token = res.data['access'];
        localStorage.setItem('token', token);
        window.location = "http://localhost:3000/userdashboard" //This line of code will redirect you once the submission is succeed
      }, 
      (error) => {
        alert("Username or Password is Invalid!")
        console.log(error);
      })}
  }
    return( 
    
    <>
        <>
        <nav className="navbar navbar-dark nav-body">
            <a className="navbar-brand branding" href="home">RESWEB</a>
                <div className="navbar-nav ">
                    <a className=" nav-link active links" href="usersignup">Sign Up</a>
                </div>    
        </nav>
        </>

        <>
        <form className = "form-box" onSubmit = {handleSubmit}>

            <div className="form-head">Log In</div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="username" className="form-control" id="username" placeholder="Enter Username" name = "username" onChange = {(e) => setUsername(e.target.value)}/>
                
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" name = "password" onChange = {(e) => setPassword(e.target.value)} />
                
            </div>

            <button type="submit" className="submit">Submit</button>
        </form>
           
        </>
    </>);

}

export default UserLogin;