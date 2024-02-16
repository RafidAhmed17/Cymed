import {React} from 'react'

const UserNavbar = () => {

    const handleLogOut = () => {
        localStorage.removeItem('token');
        window.location = "http://localhost:3000/userlogin";
    }
    return (

        <div class="sidenav">
                <a href="home">RESWEB</a>
                <br />
                <a href="/userdashboard">Dashboard</a>
                <a href="/userclusters">Clusters</a>
                <a href="/usersearch">Search</a>
                <div className="bottom">
                    <button class="btn btn-primary "onClick = {handleLogOut}>Logout</button>
                </div>
        </div>
    );
}

export default UserNavbar;