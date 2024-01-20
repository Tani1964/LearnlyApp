import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Messages from "./pages/Messages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reviews from "./pages/Reviews";
import TeamMembers from "./pages/TeamMembers";
import Production from "./pages/Production";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex h-screen font-customFont overflow-x-hidden">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/messages" element={<Messages />}/>
            <Route path="/reviews" element={<Reviews/>}/>
            <Route path="/team-members" element={<TeamMembers/>}/>
            <Route path="/production" element={<Production/>}/>
            <Route path="/settings" element={<Settings/>}/>
          </Routes>
          
          
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
