import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import FormComponent from './formComponent';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(() => mockNavigate),
}));


describe('FormComponent', () => {
  const mockProps = {
    formlistState: {
      firstName : 'John', 
      lastName : '', 
      others:'', 
      topic : ''
    },
    data : null,
    statusMessage : '',
    formChangeHandler:jest.fn()
  }
  test('renders FormComponent without crashing', () => {
    render(<FormComponent formlistState={mockProps} getSearchList={function (data: { searchData: string; limit: number; userFirstName: string; userlastName: string; }): unknown {
      throw new Error('Function not implemented.');
    } } firstName={''} lastName={''} others={''} topic={''} />);
  });

  test('updates firstName input value', () => {
    render(<FormComponent formlistState={mockProps} getSearchList={function (data: { searchData: string; limit: number; userFirstName: string; userlastName: string; }): unknown {
      throw new Error('Function not implemented.');
    } } firstName={''} lastName={''} others={''} topic={''} />);
    const firstNameInput = screen.getByTestId('first-name-input') as HTMLInputElement;
    expect(firstNameInput).toBeInTheDocument()
    expect(firstNameInput.value).toBe('');
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    expect(firstNameInput.value).toBe('John');
  });
});