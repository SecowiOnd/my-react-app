import React from 'react';
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';
import SocialApp from "./App";

test('renders learn react link', () => {
  const { getByText } = render(<SocialApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders wilhour crashing', () => {
  const div =document.createElement('div');
  ReactDOM.render(<SocialApp />, div)
  ReactDOM.unmountComponentAtNode (div)
});