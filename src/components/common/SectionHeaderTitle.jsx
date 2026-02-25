const SectionHeader = ({title = "Title"}) => {
  return (
    <div className="section-header text-center mb-5">
      <h2 className="section-title mb-3">{title}</h2>
    </div>
  );
};

export default SectionHeader;
