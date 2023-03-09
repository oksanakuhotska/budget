import { useState, useEffect } from 'react';

import { getItems, addItem } from '../../utils/indexdb';

import Balance from '../../components/Balance';
import Transactions from '../../components/Transactions';
import Form from '../../components/Form';
import ErrorBoundary from '../../components/ErrorBoundary';

import {	Wrapper } from './styles';

const Home = () => {
const [balance, setBalance] = useState(0);
const [transactions, setTransactions] = useState([]);

	useEffect(() => {
		getItems().then((items) => {
			setTransactions(items)
		}).catch((e) => {
			console.error();
		})
	}, [setTransactions]); 

	const onChange = ({value, date, comment }) => {
		const transaction = {
			value: +value, 
			comment,
			date,
			id: Date.now(),
		};
		
		setTransactions([
			transaction,
			...transactions]);

		setBalance(balance + Number(value));

		addItem(transaction);
	};

	return (
		<ErrorBoundary fallback={<p>Something went wrong</p>}>
			<Wrapper>
			<Balance balance={balance} />
			<Form onChange={onChange} />
			<hr/>

			<Transactions transactions={transactions} />
		</Wrapper>
		</ErrorBoundary>
	)
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