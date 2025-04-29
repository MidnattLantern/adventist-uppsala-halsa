import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app container', () => {
  render(<App />);
  const appContainer = screen.getByTestId('app-container');
  expect(appContainer).toBeInTheDocument();
});

test('renders the header text', () => {
  render(<App />);
  const headerElement = screen.getByText(/header/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders the logo image', () => {
  render(<App />);
  const logo = screen.getByAltText(/logo/i);
  expect(logo).toBeInTheDocument();
});

test('renders the main section', () => {
  render(<App />);
  expect(screen.getByText(/main/i)).toBeInTheDocument();
});

test('renders the footer', () => {
  render(<App />);
  expect(screen.getByText(/footer/i)).toBeInTheDocument();
});