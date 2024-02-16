// ===================== React Packages ============================

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// ==================== Components ======================

import UserSignUp from './Pages/UserSignUp';
import UserLogin from './Pages/UserLogin';
import UserDashboard from './Pages/UserDashboard';
import Home from './Pages/Home';
import Clusters from './Pages/Clusters';
import CreateCluster from './Components/CreaterCluster';
import Search from './Pages/Search';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path = '/home' element={<Home/>}/>
          <Route exact path = '/usersignup' element={<UserSignUp/>}/>
          <Route exact path = '/userlogin' element={<UserLogin/>}/>
          <Route exact path = '/userdashboard' element={<UserDashboard/>}/>
          <Route exact path = '/userclusters' element={<Clusters/>}/>
          <Route exact path = '/userclusters/createcluster' element={<CreateCluster/>}/>
          <Route exact path = '/usersearch' element={<Search/>}/>
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
