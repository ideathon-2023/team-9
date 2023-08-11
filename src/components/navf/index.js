import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/home" activeStyle>
						Home
					</NavLink>
					<NavLink to="/doctor" activeStyle>
						Doctor
					</NavLink>
					<NavLink to="/hospital" activeStyle>
						Hospital
					</NavLink>
					<NavLink to="/book" activeStyle>
						Book Appointment
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
