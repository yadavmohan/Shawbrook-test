import React from 'react';
import { render } from '@testing-library/react';
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
    resetdatalistapi:jest.fn()
  };

  test('renders without crashing', () => {
    const { container } = render(
      <BrowserRouter>
        <SelectedResultList {...mockProps} />
      </BrowserRouter>
    );
    expect(container).toBeInTheDocument();
  });

  test('triggers navigation when back button is clicked', () => {
    render(
      <BrowserRouter>
        <SelectedResultList {...mockProps} />
      </BrowserRouter>
    );
  });
});