import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./Page/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/add" element={<AddUser />} />
                    <Route exact path="/edit/:id" element={<EditUser />} />
                    <Route exact path="/detail/:id" element={<ViewUser />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;