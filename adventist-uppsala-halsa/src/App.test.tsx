import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app container', () => {
  render(<App />);
  const appContainer = screen.getByTestId('app-container');
  expect(appContainer).toBeInTheDocument();
});

test('renders the header text', () => {
  render(<App />);
  expect(screen.getByTestId('header')).toBeInTheDocument();
});


test('renders the main section', () => {
  render(<App />);
  expect(screen.getByText(/main/i)).toBeInTheDocument();
});

test('renders the footer', () => {
  render(<App />);
  expect(screen.getByTestId('footer')).toBeInTheDocument();
});