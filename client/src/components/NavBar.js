import { useEffect, useState } from "react";
import { Link, NavLink as RRNavLink, useLocation } from "react-router-dom";
import {
Button,
Collapse,
Nav,
NavLink,
NavItem,
Navbar,
NavbarBrand,
NavbarToggler,
} from "reactstrap";
import { logout } from "../managers/authManager";
import { BiChevronRight, BiLogOut, BiBookBookmark, BiStar, BiRevision, BiPlus} from "react-icons/bi";
import { LuGamepad2 } from "react-icons/lu";
import "../index.css"

export default function NavBar({ loggedInUser, setLoggedInUser, setUserGames}) {
const [open, setOpen] = useState(false);
const [isClosed, setIsClosed] = useState(true)
const location = useLocation()

useEffect(() => {
    setIsClosed(true)
}, [location])

const toggleNavbar = () => setOpen(!open);

return (<>
    <div className="navbar-placeholder"/>
    <nav className={`navbar-container ${isClosed ? `closed` : ''}`}>
        <header>
            <div className="header-row">
                <div className="logo-icon">
                    <span className="logo-letters">GC</span>
                </div>
                <div className="header-text-container">
                    <span className="header-text">GameChronicle</span>
                    {/* <span className="header-text">Chronicle</span> */}
                </div>
                <BiChevronRight className="navbar-chevron" onClick={() => {setIsClosed(!isClosed)}}/>
            </div>
        </header>
        <div className="navbar-list">
        {loggedInUser ? (
        <>

        <div className="center-nav-links-container">
            <div className="navbar__item">
                <Link className="nav-link-custom" to="/">
                    <LuGamepad2 className="nav-link-icon"/>
                    <span className="nav-link-text">Playlist</span>
                </Link>
            </div>          
            <div className="navbar__item">
                <Link className="nav-link-custom" to="/addgames">
                    <BiPlus className="nav-link-icon"/>
                    <span className="nav-link-text">Add Games</span>
                </Link>
            </div>          
            <div className="navbar__item">
                <Link className="nav-link-custom" to="/favorites">
                    <BiStar className="nav-link-icon"/>
                    <span className="nav-link-text">Favorites</span>
                </Link>
            </div>
            <div className="navbar__item">
                <Link className="nav-link-custom" to="/replayables">
                    <BiRevision className="nav-link-icon"/>
                    <span className="nav-link-text">Replayables</span>
                </Link>
            </div>
            <div className="navbar__item">
                <Link className="nav-link-custom" to="/history">
                    <BiBookBookmark className="nav-link-icon"/>
                    <span className="nav-link-text">History</span>
                </Link>
            </div>
        </div>
            {/* insert navbar spacer here if needed */}
            <div className="navbar__item logout__item">
                <div className="nav-link-custom" onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    logout().then(() => {
                        setLoggedInUser(null);
                        setUserGames(undefined)
                    });
                }}>
                    <BiLogOut className="nav-link-icon"/>
                    <span className="nav-link-text">Logout</span>
                </div>
            </div>
        </>
        ) : (
        <Nav navbar>
            <NavItem>
            <NavLink tag={RRNavLink} to="/login">
                <Button color="primary">Login</Button>
            </NavLink>
            </NavItem>
        </Nav>
        )}
        </div>
    </nav>
</>);
}