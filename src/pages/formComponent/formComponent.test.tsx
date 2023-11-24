import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormComponent from './formComponent';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(() => mockNavigate),
}));

const mockSearchlist = jest.fn();
const mockProps = {
  formlistState: {
    data: null,
    statusMessage: '',
  },
  getSearchList: mockSearchlist,
  firstName: '',
  lastName: '',
  others: '',
  topic: '',
};

describe('FormComponent', () => {
  test('renders form correctly', () => {
    render(<FormComponent {...mockProps} />);
    expect(screen.getByText('Form')).toBeInTheDocument();
  });

  test('handles form changes correctly', () => {
    render(<FormComponent {...mockProps} />);
    fireEvent.change(screen.getByTestId('first-name-input'), { target: { value: 'Mohan' } });
    fireEvent.change(screen.getByTestId('last-name-input'), { target: { value: 'Yadav' } });
    fireEvent.change(screen.getByTestId('topic-input'), { target: { value: 'others' } });
    const otherInput = screen.getByTestId("others-input");
    expect(otherInput).toBeInTheDocument();
    fireEvent.change(otherInput, { target: { value: 'USA' } });
  });

  test('handles form submission correctly', () => {
    render(<FormComponent {...mockProps} />);
    const searchButton = screen.getByRole('button');
    fireEvent.submit(searchButton);
  });
});
