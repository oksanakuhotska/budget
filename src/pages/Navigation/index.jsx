import {
	Outlet,
} from 'react-router-dom';

import { Nav, NavLink, Wrapper } from "./styles";

const Loyout = () => (
	<Wrapper>
		<Nav>
			<NavLink to={'/'}>Home</NavLink>
			<NavLink to={'/about'}>About</NavLink>
			<NavLink to={'/statistics'}>Statistics</NavLink>
		</Nav>
		<br />
	<Outlet />
</Wrapper>
);

export default Loyout;