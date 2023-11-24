import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SelectedResultList from './selectedResultList'; 
import { BrowserRouter } from 'react-router-dom';

describe('SelectedResultList component', () => {
  const mockProps = {
    formlistState: {
      firstName: 'Mohan',
      lastName: 'Yadav',
      topic: 'USA'
    },
    formDetailsState: {
      selectedData: ['image1.jpg', 'image2.jpg']
    },
    resetdatalistapi: jest.fn()
  };

  test('renders without crashing', () => {
    render(
      <BrowserRouter>
        <SelectedResultList {...mockProps} />
      </BrowserRouter>
    );
    const backButton = screen.getByText('Goto home page');
    expect(backButton).toBeInTheDocument();
  });

  test('triggers navigation when back button is clicked', () => {
    render(
      <BrowserRouter>
        <SelectedResultList {...mockProps} />
      </BrowserRouter>
    );

    const backButton = screen.getByText('Goto home page');
    fireEvent.click(backButton);
  });
});
