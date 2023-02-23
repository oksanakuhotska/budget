import React from 'react';
import { 
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';

import { open } from '../../utils/indexdb';

import Home from '../Home';
import About from '../About';
import Statistics from '../Statistics';
import Navigation from '../Navigation';
import { GlobalStyle } from './styles';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Navigation />,
		children: [
			{
				path: '/',
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

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
		}
	}

	componentDidMount() {
		open().then(() => {
			this.setState({
				loading: false,
			}).catch(() => {
				console.error('Error happened')
			})
		});
	}

	render() {
		if (this.state.loading) {
			return <div>Loading...</div>
		};

		return (
			<>
				<GlobalStyle />
				<RouterProvider router={router} />
			</>
		)
	}
}

export default App;