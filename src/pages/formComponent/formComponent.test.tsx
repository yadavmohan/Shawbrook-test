/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FormComponent from './formComponent';

const getSearchJest = jest.fn();
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(() => mockNavigate),
}));

const mockProps = {
  formlistState: {
    data: null,
    statusMessage: '',
  },
  getSearchList: getSearchJest,
  firstName: '',
  lastName: '',
  others: '',
  topic: '',
};

describe('FormComponent', () => {
  test('renders form correctly', () => {
    const { getByText } = render(<FormComponent {...mockProps} />);
    expect(getByText('Form')).toBeInTheDocument();
  });

  test('handles form changes correctly', () => {
    const { getByTestId } = render(<FormComponent {...mockProps} />);
    fireEvent.change(getByTestId('first-name-input'), { target: { value: 'John' } });
    fireEvent.change(getByTestId('last-name-input'), { target: { value: 'Doe' } });
  });
});
