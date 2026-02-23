import { Link } from 'react-router-dom';

function CategorySidebar({ title, categories }) {
  return (
    <div className="side-bar">
      <h3 className="side-bar-heading mb-4">{title}</h3>
      <nav className="side-bar-nav">
        <ul className="sidebar-nav-items list-unstyled flex-column">
          {categories.map((category) => (
            <li className="nav-item" key={category.title}>
              <Link className={category.active ? 'active' : ''} to={category.href}>{category.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default CategorySidebar;
