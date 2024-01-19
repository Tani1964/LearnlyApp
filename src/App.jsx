import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div className="flex h-screen font-customFont">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <Dashboard/>
      </div>
    </div>
  );
};

export default App;
