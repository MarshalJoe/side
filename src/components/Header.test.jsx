import { render, screen } from '@testing-library/react';
import {createMemoryRouter, RouterProvider} from 'react-router-dom';
import Header from './Header';

test('renders basic Header with proper text', () => {
  const router = createMemoryRouter(
    [{ path: "/", element: <Header />}],
    { initialEntries: ["/"] },
  );

  render(<RouterProvider router={router} />);

  expect(screen.getByText(/Property Listing/i)).toBeInTheDocument();
});