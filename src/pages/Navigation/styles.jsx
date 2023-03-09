import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
padding: 5px;
background-color: #eeeeee;
`;
// в  реакт дев тулс - можна передавати значення, і замість стайлд.дів - побачити значення компоненту

Wrapper.displayName = 'AppWrapper'; 

export const Nav = styled.nav`
	padding: 10px;
	display: flex;
	align-items: center;
	gap: 30px;
`;
Nav.displayName = 'HeaderNavigation';

export const NavLink = styled(Link)`
	text-decoration: none;
	color: #313c02;
	text-transform: uppercase;
	font-size: 20px;

	&:hover {
		text-decoration: underline;
		color: darkcyan;
	}
`;
Link.displayName = 'NavLink';


