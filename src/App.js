import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Overview from "./models/overview/Overview";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div>
      <Header />
      <div className="app">
        <SideBar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Overview />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
