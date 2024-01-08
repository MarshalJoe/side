import React from 'react';
import './styles';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import App, { loader as rootLoader } from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorPage from "./error";
import reportWebVitals from './reportWebVitals';

function Layout() {
  return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [  
      {
        path: '/',
        element: <App />,
        loader: rootLoader,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
