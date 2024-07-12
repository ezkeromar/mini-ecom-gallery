import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './components/layout/header';
import Footer from './components/layout/footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/product/:id",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className='bg-white flex items-stretch justify-stretch flex-col h-screen max-w-7xl m-auto'>
      <Header />
      <div className="self-stretch grow flex flex-col">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
