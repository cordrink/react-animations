import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="global-container">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
