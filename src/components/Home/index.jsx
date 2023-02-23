import { Component } from 'react';

import { getItems, addItem } from '../../utils/indexdb';

import Balance from '../Balance';
import Transactions from '../Transactions';
import Form from '../Form';
import ErrorBoundary from '../ErrorBoundary';

import {	Wrapper } from './styles';

class Home extends Component {
	constructor() {
		super();

		this.state = {
			balance: 0,
			transactions: [] 
		};

		this.onChange = this.onChange.bind(this);
		console.log('constructor');
	};

	componentDidMount() {
		getItems().then((transactions) => {
			this.setState({
				transactions
			})
		}).catch((e) => {})
	};

	onChange = ({value, date, comment }) => {
		const transaction = {
			value: +value, 
			comment,
			date,
			id: Date.now(),
		};

		this.setState((state) => ({
			balance: state.balance + Number(value),
			transactions: [
				transaction,
				...state.transactions]
		}));

		addItem(transaction);
	};

	render() {
		console.log('render')
		return (
			<ErrorBoundary fallback={<p>Something went wrong</p>}>
				<Wrapper>
				<Balance balance={this.state.balance} />
				<Form onChange={this.onChange} />
				<hr/>

				<Transactions transactions={this.state.transactions} />
			</Wrapper>
			</ErrorBoundary>
		)
	}
}

export default Home;


	// componentDidMount() {
	// 	const balance = JSON.parse(window.localStorage.getItem('balance'));

	// 	this.setState({
	// 		balance
	// 	})

	// 	console.log('componentDidMount')
	// }
	
	// componentWillUnmount() {
	// 	window.localStorage.setItem('balance', JSON.stringify(this.state.balance))
	// 	console.log('componentWillUnmount')
	// }

	// onIncrease () {
	// 	this.setState((state) => ({
	// 		balance: state.balance	+ 1,
	// 		transactions: [{
	// 				label: 'increase',
	// 				value: +1,
	// 				id: ++id
	// 			}, ...state.transactions]
	// 	}))
	// }

	// onDecrease = () => {
	// 	this.setState((state) => ({
	// 		balance: state.balance	- 1,
	// 		transactions: [{
	// 				label: 'decrease',
	// 				value: -1,
	// 				id: ++id
	// 			}, ...state.transactions]
	// 	}))
	// }