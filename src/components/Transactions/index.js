import PropTypes from 'prop-types';
import Transaction from "../Transaction";

const Transactions = ({ transactions = [] }) => transactions.map((transaction) => <Transaction transaction={transaction} key={transaction.id} />);

Transactions.propType = {
	transactions: PropTypes.array
};

export default Transactions;