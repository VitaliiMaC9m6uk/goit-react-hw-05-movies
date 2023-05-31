import { NavLink,Outlet } from 'react-router-dom';
import { Link, Container, Navbar } from './Header.styled';
import { Suspense } from 'react';

const Header = () => {
    return (
      <>
        <Navbar>
          <Container>
            <Link>
              <NavLink to="/">Home</NavLink>
            </Link>
            <Link>
              <NavLink to="/movies">Movie</NavLink>
            </Link>
          </Container>
        </Navbar>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </>
    );
};
export default Header;
