import { Link } from "react-router-dom";

const Header = ({ isAuthenticated, user }) => {
  let guestNavigation = (
    <header id="site-header">
      <section className="navbar-dashboard">
        <Link to="/">Dashboard</Link>
        <div id="guest">
          <Link className="button" to="/login">
            Login
          </Link>
          <Link className="button" to="/register">
            Register
          </Link>
        </div>
      </section>
    </header>
  );

  let userNavigation = (
    <div id="user">
      <span>Welcome, {user}</span>
      <Link className="button" to="/my-pets">
        My Pets
      </Link>
      <Link className="button" to="/create">
        Add Pet
      </Link>
      <Link className="#" to="/logout">
        Logout
      </Link>
    </div>
  );
  return (
    <header id="site-header">
      <nav className="navbar">
        <section className="navbar-dashboard">
          <Link to="/">Dashboard</Link>
          {isAuthenticated ? userNavigation : guestNavigation}
        </section>
      </nav>
    </header>
  );
};

export default Header;
