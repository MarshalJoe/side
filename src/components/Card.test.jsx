import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders Card element', () => {
  render(<Card />);
  const heading = screen.getByRole(
    'heading',
    /Side React Take-home Assignment/i,
  );
  expect(heading).toBeInTheDocument();
});