import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Profile from "./pages/Profile.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
