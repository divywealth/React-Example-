import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ListDetails from "./pages/ListDetails";
import Login from "./pages/Login";
import ProtectedRoute from "./protected.route";


function App() {
  return (
    <Router>
      <div>
        <div>
          <Routes>
            <Route exact path="/Login" element={<Login/>}/>
            <Route element={<ProtectedRoute/>}>
              <Route exact path="/" element={<Homepage />}/>
            </Route>
            <Route exact path="/listdetails/:id" element={<ListDetails />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
