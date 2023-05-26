import {  Outlet } from "react-router-dom";
import { NavLink, Container, Navbar } from './Header.styled';

const Header = () => {
    return (
      <>
        <Navbar>
          <Container>
            <NavLink href="/">
              Home
            </NavLink>
            <NavLink href="/movies">
              Movie
            </NavLink>
          </Container>
        </Navbar>
        <Outlet />
      </>
    );
};
export default Header;
