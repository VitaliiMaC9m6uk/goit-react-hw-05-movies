import { Outlet } from "react-router-dom";

const Header = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
                <a className="nav-link" href="/movie">
                  Movie
                </a>
              </div>
            </div>
          </div>
        </nav>
        <Outlet />
      </>
    );
};
export default Header;
