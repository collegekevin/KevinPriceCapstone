
import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Login from './Login'
import CreateUser from './CreateUser.js'
import Home from './Home'
import NavBar from "./NavBar"
import CreatePost from "./CreatePost"
import UserPage from "./UserPage"
import LoggedOut from "./LoggedOut"

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
      <NavBar user={user} setIsLoggedIn={setIsLoggedIn} />
      {/* {isLoggedIn ? <NavBar user={user} setIsLoggedIn={setIsLoggedIn} /> : console.log("Nobody's logged in")} */}
      <Routes>
        <Route exact path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/CreateUser" element={<CreateUser />} />
        <Route path='/home' element={<Home user={user} isLoggedIn={isLoggedIn} />} />
        <Route path="/CreatePost" element={<CreatePost user={user} />} />
        <Route path="/users/:id" element={<UserPage user={user} />} />
        <Route path="LoggedOut" element={<LoggedOut user={user} />} />
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

