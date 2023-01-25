
import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Login from './components/Login'
import CreateUser from './components/CreateUser.js'
import Home from './components/Home'
import NavBar from "./components/NavBar"
import CreatePost from "./components/CreatePost"
import UserPage from "./components/UserPage"
import LoggedOut from "./components/LoggedOut"
import EditUser from "./components/EditUser"
import DisplayUserPosts from "./components/DisplayUserPosts"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});


  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div>
      <NavBar user={user} setUser={setUser} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      {/* {isLoggedIn ? <NavBar user={user} setUser={setUser} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} /> : console.log("Nobody's logged in")} */}
      <Routes>
        <Route exact path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/CreateUser" element={<CreateUser />} />
        <Route path='/home' element={<Home user={user} isLoggedIn={isLoggedIn} setUser={setUser} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/YourPosts' element={<DisplayUserPosts user={user} />} />
        <Route path="/CreatePost" element={<CreatePost user={user} setUser={setUser} />} />
        <Route path="/users/:id" element={<UserPage user={user} setUser={setUser} />} />
        <Route path="LoggedOut" element={<LoggedOut user={user} setUser={setUser} />} />
        <Route path="EditUser" element={<EditUser user={user} setUser={setUser} />} />
        {/* <Route path="EditPost" element={<EditPost user={user} setUser={setUser} />} /> */}
      </Routes>
    </div>
  );
}

export default App;


// element={<NavBar user={user} setIsLoggedIn={setIsLoggedIn} />}

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//export default App;

