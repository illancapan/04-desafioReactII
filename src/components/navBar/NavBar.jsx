import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <>
      <div className="mx-4">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <Link to={`/`} className="navbar-brand ps-4">
            Pizzeria Mamma Mia!
            </Link>
            <a className="navbar-brand pe-4" href="#">
            $134.965
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
