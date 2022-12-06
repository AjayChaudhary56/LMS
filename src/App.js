import Navbar from "./component/navbar";
import Home from "./containers/home";
import AddBooks from "./containers/addbooks";
import MyBooks from "./containers/mybooks";
import RequestBooks from "./containers/requestbooks";
import Admin from "./containers/admin";
import Login from "./containers/login";
import Signup from "./containers/signup";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar className="Navbar" />

        <div className="webcontent">
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/addBooks" element={<AddBooks />} />
            <Route path="/myBooks" element={<MyBooks />} />
            <Route path="/requestBooks" element={<RequestBooks />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
