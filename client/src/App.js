import { React } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Generator from "./Pages/Generator";
import Home from "./Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/generator",
    element: <Generator />,
  },
]);
const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
