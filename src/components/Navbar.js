import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/books">Books</Link>
    <br />
    <Link to="/categories">Categories</Link>
  </nav>
);

export default Navbar;
