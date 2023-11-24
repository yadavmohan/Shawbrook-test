import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormComponent from './formComponent';  
import { formPropeType } from "../../constant/data";

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
    isFetchLoading: false,
    firstName: '',
    lastName: '',
    topic: '',
  },
  getSearchList: mockSearchlist,
  firstName: '',
  lastName: '',
  others: '',
  topic: '',
} as unknown as formPropeType;

describe('FormComponent', () => {
  test('renders form', () => {
    render(<FormComponent {...mockProps} />);
    expect(screen.getByText('Form')).toBeInTheDocument();
  });

  test('handles form changes correctly', () => {
    render(<FormComponent {...mockProps} />);
    fireEvent.change(screen.getByTestId('first-name-input'), { target: { value: 'Mohan' } });
    fireEvent.change(screen.getByTestId('last-name-input'), { target: { value: 'yadav' } });
    fireEvent.change(screen.getByTestId('topic-input'), { target: { value: 'others' } });
    const otherInput = screen.getByTestId("others-input");
    expect(otherInput).toBeInTheDocument();
    fireEvent.change(otherInput, { target: { value: 'React Testing' } });
  });

  test('handles form submission correctly', () => {
    render(<FormComponent {...mockProps} />);
    const searchButton = screen.getByRole('button', { name: /Search/i });
    fireEvent.click(searchButton);
  });
});
