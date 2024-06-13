import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home';
import Project from './pages/Project';
import Resume from './pages/Resume';

import {
  createBrowserRouter
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path: '/',
        element: <Home />,
      },
      {
          path: '/projects',
          element: <Project/>,
      },
      {
          path: '/resume',
          element: <Resume/>,
      },
    ]
  }
    

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode router = {router}>
    <App />
  </React.StrictMode>
);

