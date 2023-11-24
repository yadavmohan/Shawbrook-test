import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SelectedResultList from './selectedResultList';

const mockNavigate = jest.fn();
const mockResetDataListApi = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

const formlistState = {
      firstName: 'Mohan',
      lastName: 'yadav',
      topic: 'UAE',
};

describe('SelectedResultList', () => {
  test('renders selected data correctly', () => {
    const selectedData = ['img1', 'img2'];

    const formDetailsState = {
      selectedData: selectedData,
    };

    render(
      <SelectedResultList
        formDetailsState={formDetailsState}
        formlistState={formlistState}
        resetdatalistapi={mockResetDataListApi}
      />
    );
    for (const imageSrc of selectedData) {
      const imgElement = screen.getByAltText(imageSrc);
      expect(imgElement).toBeInTheDocument();
      expect(imgElement).toHaveAttribute('src', imageSrc);
    }
  });

  test('navigates to home page on back button click', () => {
    const selectedData = ['img1', 'img2'];

    const formDetailsState = {
      selectedData: selectedData,
    };

    render(
      <SelectedResultList
        formDetailsState={formDetailsState}
        formlistState={formlistState}
        resetdatalistapi={mockResetDataListApi}
      />
    );
    fireEvent.click(screen.getByText('Goto home page'));
    expect(mockNavigate).toHaveBeenCalledWith('/');
    expect(mockResetDataListApi).toHaveBeenCalled();
  });
});
