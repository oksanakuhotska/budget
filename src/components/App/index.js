import { 
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';

import { open } from '../../utils/indexdb';

import Home from '../../pages/Home';
import About from '../../pages/About';
import Statistics from '../../pages/Statistics';
import Navigation from '../../pages/Navigation';
import { GlobalStyle } from './styles';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Navigation />,
		children: [
			{
				element: <Home />,
				index: true,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/statistics',
				element: <Statistics />,
			},
		],
	},
]);

const App = () => {

	return (
		<>
			<GlobalStyle />
			<RouterProvider router={router} />
		</>
	)
}

export default App;