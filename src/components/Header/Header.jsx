import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { List } from 'react-bootstrap-icons';
import './header.css';

const nav__links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/rooms',
    display: 'Rooms'
  },
];

const Header = () => {

  const headerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  const stickyHeaderFunc = () => {
    if (window.scrollY > 80) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', stickyHeaderFunc);
    return () => {
      window.removeEventListener("scroll", stickyHeaderFunc);
    };
  }, []);


  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <header className='sticky__header' ref={headerRef}>
      <Container>
        <Row>
          <div className="d-flex align-items-center justify-content-between">
            {/* logo */}
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            {/* logo end */}

            {/* menu start */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path} className={isActive(item.path) ? 'active__link' : ''}>
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* menu end */}

            <div className="headerdiv">
              <Button
                color="warning"
                className={`headerbtn ${isActive('/login') ? 'active' : ''}`}>
                <NavLink to='/login'>Login</NavLink>
              </Button>
              <Button
                color="warning"
                className={`headerbtn ${isActive('/register') ? 'active' : ''}`}>
                <NavLink to='/register'>Register</NavLink>
              </Button>
              <span className="mobile__menu">
                <List />
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
