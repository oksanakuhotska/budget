import styled from "styled-components";

export const Wrapper = styled.div`
	background-color: #fcfee0;;
	border: 1px solid #dbdbdb;
	border-radius: 10px;
	padding: 5px;
	margin-bottom: 10px;
`;
Wrapper.displayName = 'FormWrapper';

export const Input = styled.input`
	border: 1px solid #dbdbdb;
	height: 40px;
	min-width: 80px;
	border-radius: 10px;
	padding: 0px 5px;
	margin-right: 10px;
	margin-bottom: 3px;
	outline: none;
`;
Input.displayName = 'Input';

export const Row = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
`;
Row.displayName = 'Row';

export const Button = styled.button`
	border: 1px solid #dbdbdb;
	height: 40px;
	border-radius: 10px;
	padding: 0px 21px;
	box-sizing: border-box;
	background-color: #c1c1de;
	color: rgba(0, 0, 0, 0.87);
	font-size: 18px;
	margin-right: 10px;
	outline: none;
	width: 118px;

	&:hover {
		cursor: pointer;
		background-color: #e3f493;
	}
`;

Button.displayName = 'Button';

export const Comment = styled.textarea`
	min-height: 40px;
	line-height: 1.5;
	border: 1px solid #dbdbdb;
	height: 40px;
	border-radius: 10px;
	padding: 5px;
	width: 138px;
	box-sizing: border-box;
	margin: 0;
	outline: 0;
	min-width: 140px;
`;

Comment.displayName = 'TransactionsComment';