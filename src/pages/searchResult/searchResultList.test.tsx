import React from 'react';
import { describe, expect } from '@jest/globals';
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
      userfName: 'John',
      userlName: 'Doe',
      topic: 'SomeTopic'
    };

    const onSelectedItemChangeHandler = jest.fn();
    const removeChangeHandler = jest.fn();

    render(
      <SearchResultList
        formlistState={formlistState}
        onSelectedItemChangeHandler={onSelectedItemChangeHandler}
        removeChangeHandler={removeChangeHandler} resetdatalistapi={function (): unknown {
          throw new Error('Function not implemented.');
        } } id={0} urls={{
          small: ''
        }}        />
    );
    expect(screen.getAllByText('Accept')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Reject')[0]).toBeInTheDocument();
  });
});
