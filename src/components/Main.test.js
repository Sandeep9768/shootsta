import React from 'react';
import { render, screen,fireEvent, wait  } from '@testing-library/react';
import Main from './Main';
import * as callAPI from '../services';

jest.mock('../services');
test('renders Main component', () => {
  render(<Main />);
  const searchText = screen.getByText('Search Text:');
  expect(searchText).toBeInTheDocument();
});


// jest.mock('../services');

// test.only('form makes a api call with proper params', async  () => {
//   callAPI.callAPI.mockResolvedValueOnce({ok : true});
//   const {getByText, getByLabelText, debug} = render(<Main />);
//   const inputField = getByLabelText(/Search Text:/i);
//   const submitBtn = getByText(/Submit/i);
//   fireEvent.change(inputField, {'target': {'value' : 'sample title'}});
//   fireEvent.click(submitBtn);
//   debug(submitBtn);
//   expect(callAPI.callAPI)?.toHaveBeenCalledTimes()
//   expect(callAPI.callAPI).toHaveBeenCalledWith("sample title")
//   await wait(() => null)
// })