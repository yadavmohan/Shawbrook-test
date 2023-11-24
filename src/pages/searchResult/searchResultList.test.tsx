import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import SearchResultList from './searchResultList';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(() => mockNavigate),
}));

describe('SearchResultList', () => {
  test('onClick event for accept button', () => {
    const data = [
      { id: 1, urls: { small: 'image1.jpg' } },
      { id: 2, urls: { small: 'image2.jpg' } },
    ];

    const formlistState = {
      data : data,
      userfName: 'Mohan',
      userlName: 'Yadav',
      topic: 'UAE'
    };

    const onSelectedItemChangeHandler = jest.fn();
    const removeChangeHandler = jest.fn();

    render(
      <SearchResultList
        formlistState={formlistState}
        onSelectedItemChangeHandler={onSelectedItemChangeHandler}
        removeChangeHandler={removeChangeHandler} resetdatalistapi={function (): unknown {
          throw new Error('Function not implemented.');
        }} 
        id={0} 
        urls={{
          small: ''
        }}        
        />
    );
    expect(screen.getAllByText('Accept')[0]).toBeInTheDocument();
  });
});
