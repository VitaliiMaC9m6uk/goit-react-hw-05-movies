import { NavLink,Outlet } from 'react-router-dom';
import { Link, Container, Navbar } from './Header.styled';

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
        <Outlet />
      </>
    );
};
export default Header;
