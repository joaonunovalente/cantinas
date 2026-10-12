import { useRef } from "react";

function Tabs({ tabs = [], activeTabId, onTabChange, label = "Escolher cantina" }) {
  const listRef = useRef(null);

  const handleKeyDown = (event, index) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const dir = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + dir + tabs.length) % tabs.length;
    onTabChange(tabs[nextIndex].id);
    // Move o foco para o próximo tab após render
    requestAnimationFrame(() => {
      listRef.current?.querySelector(`[data-tab-index="${nextIndex}"]`)?.focus();
    });
  };

  return (
    <ul
      className="nav nav-pills justify-content-center mt-1"
      role="tablist"
      aria-label={label}
      ref={listRef}
    >
      {tabs.map((tab, index) => {
        const selected = activeTabId === tab.id;
        return (
          <li key={tab.id} className="nav-item" role="presentation">
            <button
              id={`tab-${tab.id}`}
              aria-selected={selected}
              data-tab-index={index}
              tabIndex={selected ? 0 : -1}
              className={`nav-link ${selected ? "active" : ""}`}
              type="button"
              role="tab"
              onClick={() => onTabChange(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            >
              {tab.label}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Tabs;