import styled from 'styled-components';

export const Wrapper = styled.div`
	background-color: ${({ value }) => value < 0 ? '#f8e9e9' : '#d6efdf'};
	border: 2px solid ${({ value }) => value < 0 ? '#f9f3db' : '#cbe5e8'};
	border-radius: 10px;
	padding: 10px;
	margin-bottom: 10px;
	display: flex;
	align-items: center;
`;
Wrapper.displayName = 'TransactionWrapper';

export const TransactionDate = styled.div`
	flex-grow: 1;
`;
TransactionDate.displayName = 'TransactionDate';

export const Value = styled.div`
	flex-grow: 1;
`;
Value.displayName = 'Value';

export const Comment = styled.div`
	flex-grow: 2;
`;
Comment.displayName = 'Comment';