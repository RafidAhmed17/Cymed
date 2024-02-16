//================= React Packages ======================
import {React} from 'react'

//================== Custom CSS ==================

import '../Styles/home.css'



// ================ Home Component ==================

const Home = () => {

    return(
        
        <>
            <>
            <nav className="navbar navbar-expand-lg navbar-dark nav-body">
                <div className="container">
                <a className="navbar-brand branding" href="home">RESWEB</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="userlogin">Log In</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="usersignup">Sign Up</a>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>

            <div className="image">
                <img src="https://images.assetsdelivery.com/compings_v2/shendart/shendart1702/shendart170200118.jpg" alt="Working" />
            </div>

            </>
        </>
    );
}

export default Home;