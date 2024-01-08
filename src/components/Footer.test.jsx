import { render, screen } from '@testing-library/react';
import {createMemoryRouter, RouterProvider} from 'react-router-dom';
import Footer from './Footer';

test('renders basic Footer with proper text', () => {
  const router = createMemoryRouter(
    [{ path: "/", element: <Footer />}],
    { initialEntries: ["/"] },
  );

  render(<RouterProvider router={router} />);

  expect(screen.getByText(/Copyright Side/i)).toBeInTheDocument();
});