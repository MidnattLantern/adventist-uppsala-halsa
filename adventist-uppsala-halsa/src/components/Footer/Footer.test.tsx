import { render, screen } from '@testing-library/react';

import Footer from './Footer';

describe('Footer component', () => {
  test('renders adventist.se link with correct href', () => {
    render(<Footer />);
    const linkElement = screen.getByRole('link', { name: /adventist\.se/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://www.adventist.se/');
  });

  test('displays correct copyright text', () => {
    render(<Footer />);
    const copyright =
      screen.getByText(/© Uppsala Adventkyrka/i);
    expect(copyright).toBeInTheDocument();
  });
});