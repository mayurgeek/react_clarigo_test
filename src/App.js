
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {UserRegister} from "./components/UserRegister.js";
import {Login} from "./components/Login.js";
import {Dashboard} from "./components/Dashbord.js";
import {Navbar} from "./components/Navbar.js";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="container-fluid">
      <Routes>
        <Route>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user_registeration" element={<UserRegister />} />
          <Route path="/login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="*" element={<h1>no page</h1>} />
        </Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
}


