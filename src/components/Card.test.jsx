import Card from './Card';
import React from "react";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

test('renders basic Card with all attributes', () => {
  const address = {
    streetNumber: 742,
    streetNumber: "Evergreen Terrace",
    city: "Springfield",
    state: "Ohio",
  }
  const router = createMemoryRouter(
    [
      {
        path: "/",
        element: <Card bathsFull={2} bedrooms={4} bathsHalf={2} area="1500" address={address} listPrice="300000" />
      }
    ],
    { initialEntries: ["/"] },
  );

  render(<RouterProvider router={router} />);

  expect(screen.getByText(/4 BR/i)).toBeInTheDocument();
  expect(screen.getByText(/3 Bath/i)).toBeInTheDocument();
  expect(screen.getByText(/300,000/i)).toBeInTheDocument();
  expect(screen.getByText(/Evergreen Terrace/i)).toBeInTheDocument();
  expect(screen.getByText(/Springfield/i)).toBeInTheDocument();
  expect(screen.getByText(/Ohio/i)).toBeInTheDocument();
});