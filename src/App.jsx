import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Start from '../src/components/start';
import Quiz from '../src/components/quiz';
import Analysis from "../src/components/analysis"

function App() {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <Start />,
        },
        {
          path : "/quiz",
          element: <Quiz />,
        },
        {
          path : "/analysis",
          element : <Analysis />,
        }
      ]);

  return (
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;