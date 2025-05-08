import ClickableImage from "./ClickableImage";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

it('renders image and button with correct classes', () => {
    render(<ClickableImage src="/test.png">Click me</ClickableImage>);
    expect(screen.getByRole('img')).toHaveAttribute('src', '/test.png');
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Click me')).toBeInTheDocument();
});

it('sets the correct alt text', () => {
    render(<ClickableImage src="/fake.png">Alt test</ClickableImage>);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt', 'failed to load /fake.png');
});