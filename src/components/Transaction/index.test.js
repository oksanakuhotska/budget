import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Transaction from '.';

describe('Transaction component', () => {
  let props;

  beforeEach(() => {
    props = {
      transaction: {
        value: 23,
        comment: 'test',
        date: '22.02.2023'
      }
    };
  });

  it('should show transaction', () => {
    const { container } = render(<Transaction {...props} />);
    expect(container).toMatchSnapshot();
  });
});