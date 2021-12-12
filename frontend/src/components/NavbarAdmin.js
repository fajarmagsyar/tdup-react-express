import React from 'react';
import { Link } from 'react-router-dom';

const NavbarAdmin = () => {
    return (
          <nav className="navbar is-info" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src="/logo.png" className='mr-3' alt='logo' />TDUP | Kota Kupang
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item" to="/">
                        Data TDUP
                    </Link>
                    <Link className="navbar-item" to="profil">
                        Profil
                    </Link>

                </div>
                <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                    <button className="button is-danger">
                        Sign Out
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </nav>  

    )
}

export default NavbarAdmin
