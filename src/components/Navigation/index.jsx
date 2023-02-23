import {
	Outlet,
} from 'react-router-dom';

import { Nav, NavLink, Wrapper } from "./styles";

const Loyout = () => (
	<Wrapper>
		<Nav>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/About'>About</NavLink>
			<NavLink to='/Statistics'>Statistics</NavLink>
		</Nav>
		<br />
	<Outlet />
</Wrapper>
);

export default Loyout;