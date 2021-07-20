import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const history = useHistory();

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton()
    },[])

    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        <i class="fab fa-creative-commons" /> &nbsp; Chris Clark
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/projects' className="nav-links" onClick={closeMobileMenu}>
                                    Projects
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                                    About Me
                                </Link>
                            </li>
                        </ul>
                        {button && <Button buttonStyle='btn--outline' onClick={()=>history.push('/contact')}>
                            Contact
                            </Button>}
                </div>
            </nav>
        </>
    )
};

export default Navbar
