function Tabs({ tabs = [], activeTabId, onTabChange }) {
  return (
    <ul className="nav nav-pills justify-content-center mt-1" role="tablist">
      {tabs.map((tab) => (
        <li key={tab.id} className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTabId === tab.id ? "active" : ""}`}
            type="button"
            role="tab"
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tabs;