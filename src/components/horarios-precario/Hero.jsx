import Tabs from "../common/Tabs";

function Hero({
  title = "Horários e Preçário",
  description = "Consulta os horários e preços das cantinas da Universidade de Aveiro.",
  tabs = [],
  activeTab,
  onTabChange,
}) {
  return (
    <div className="page-heading-holder">
      <div className="container text-center">
        <h1 className="page-heading mb-3">{title}</h1>
        <div className="">
          {description}
        </div>
        <div className="pt-3">
          <Tabs tabs={tabs} activeTabId={activeTab} onTabChange={onTabChange} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
