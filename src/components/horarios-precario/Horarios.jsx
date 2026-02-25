import { Link } from 'react-router-dom';

function Horarios({ categoriesList }) {
  return (
    <section className="help-category-section theme-section">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="section-title mb-3">Horários</h2>
        </div>

        <div className="row text-center align-content-stretch justify-content-center">
          {categoriesList.map((category) => (
            <div className="item col-12 col-md-6 col-lg-4 py-4 p-md-4" key={category.title}>
              <div className="item-inner shadow rounded-4 p-4 p-lg-5">
                <Link className="item-link" to={category.href}>
                  <div className="icon-holder mb-4">
                    <img src={category.icon} alt={category.title} />
                  </div>
                  <h3 className="item-heading">{category.title}</h3>
                  <div className="item-desc">{category.description}</div>
                  <div className="item-count">{category.count}</div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Horarios;
