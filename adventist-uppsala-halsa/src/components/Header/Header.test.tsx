import { render, screen } from '@testing-library/react';

import Header from './Header';

describe('Header component', () => {
  test('renders the logo image with alt text', () => {
    render(<Header />);
    const logoImg = screen.getByAltText('logo');
    expect(logoImg).toBeInTheDocument();
  });

  test('contains a link to the Adventkyrkan site', () => {
    render(<Header />);
    const link = screen.getByRole('link', {
      name: /Adventkyrkan/i,
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://uppsala.adventkyrka.se/');
  });

  test('displays the heading text "Adventkyrkan"', () => {
    render(<Header />);
    const heading = screen.getByText('Adventkyrkan');
    expect(heading).toBeInTheDocument();
  });
});