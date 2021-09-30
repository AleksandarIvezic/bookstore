import { NavLink } from 'react-router-dom';
import '../styling/Navbar.css';

const links = [
  {
    id: 1,
    path: '/books',
    text: 'BOOKS',
  },
  {
    id: 2,
    path: '/categories',
    text: 'CATEGORIES',
  },
];

const Navbar = () => (
  <nav>
    <div className="navbar">
      <ul>
        <li><h1>Bookstore CMS</h1></li>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              className="link"
              activeClassName="active-link"
              exact
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="user">
        <i className="fas fa-user" />
      </div>
    </div>
  </nav>
);

export default Navbar;
