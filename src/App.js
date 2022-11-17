import { Routes, Route } from "react-router-dom";
import {useState } from "react"
import Header from "./components/header/Header";
import WSideBar from "./components/header/WSideBar";
import Overview from "./models/overview/Overview";
import SideBar from "./components/sidebar/SideBar";

function App() {
    const [isSidebar, setIsSidebar] = useState(true);
  return (
    <div>
      <Header />
      <div className="app">
        <SideBar />
        <main>
          <Routes>
            <Route path="/" element={<Overview />} />
          </Routes>
        </main>
        {/* <WSideBar /> */}
      </div>
    </div>
  );
}

export default App;
