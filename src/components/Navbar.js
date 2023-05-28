
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css"

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>Aluminium Company</h3>
			<nav ref={navRef}>
				<a href="/">Welcome!</a>
				<a href="/aboutus">About Us</a>
				<a href="/services">Our Services</a>
				<a href="/contact">Contact</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;