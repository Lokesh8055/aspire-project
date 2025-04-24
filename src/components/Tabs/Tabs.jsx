import { useState } from "react";
import "./Tabs.css";
import Card from "../Card/Card";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("first");

  const handleKeyDown = (e, tabId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveTab(tabId);
    }
  };

  return (
    <div className="tabs-container" role="tablist">
      <div className="tabs">
        <button
          role="tab"
          aria-selected={activeTab === "first"}
          aria-controls="first-panel"
          id="first-tab"
          tabIndex={activeTab === "first" ? 0 : -1}
          className={`tab ${activeTab === "first" ? "active" : ""}`}
          onClick={() => setActiveTab("first")}
          onKeyDown={(e) => handleKeyDown(e, "first")}
        >
          My debit cards
        </button>
        <button
          role="tab"
          aria-selected={activeTab === "second"}
          aria-controls="second-panel"
          id="second-tab"
          tabIndex={activeTab === "second" ? 0 : -1}
          className={`tab ${activeTab === "second" ? "active" : ""}`}
          onClick={() => setActiveTab("second")}
          onKeyDown={(e) => handleKeyDown(e, "second")}
        >
          All company cards
        </button>
      </div>

      <div 
        role="tabpanel"
        id="first-panel"
        aria-labelledby="first-tab"
        hidden={activeTab !== "first"}
        className="tab-content"
      >
        {activeTab === "first" && <Card />}
      </div>
      <div 
        role="tabpanel"
        id="second-panel"
        aria-labelledby="second-tab"
        hidden={activeTab !== "second"}
        className="tab-content"
      >
        {activeTab === "second" && <div>Second panel</div>}
      </div>
    </div>
  );
};

export default TabComponent;
