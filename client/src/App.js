
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from './Login'
import CreateUser from './CreateUser.js'
import Home from './Home'
import NavBar from "./NavBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div>
      {isLoggedIn ? <NavBar user={user} setIsLoggedIn={setIsLoggedIn} /> : console.log("Nobody's logged in")}
      <Routes>
        <Route exact path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/CreateUser" element={<CreateUser />} />
        <Route path={`/users/${user.id}`} element={<Home user={user} isLoggedIn={isLoggedIn} />}
        />
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

