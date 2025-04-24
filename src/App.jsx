import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AddCardProvider } from "./context/AddCardContext";
import { FreezeCardProvider } from "./context/FreezeCardContext";

import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home";
import Cards from "./pages/Cards";
import Payments from "./pages/Payments";
import Credit from "./pages/Credit";
import Settings from "./pages/Settings";
import AddCardModal from "./components/AddCardModal/AddCardModal";

function App() {
  return (
    <AddCardProvider>
      <FreezeCardProvider>
        <Router>
          <div className="container">
            <Sidebar />
            <main className="main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cards" element={<Cards />} />
                <Route path="/payments" element={<Payments />} />
                <Route path="/credit" element={<Credit />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
              <AddCardModal />
            </main>
          </div>
        </Router>
      </FreezeCardProvider>
    </AddCardProvider>
  );
}

export default App;
