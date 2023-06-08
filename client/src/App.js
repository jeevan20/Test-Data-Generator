import { React } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Generator from "./Pages/Generator";
import "./Pages/style.css";
import Header from "./Pages/Header";
import Feature from "./Pages/Feature";
import About from "./Pages/About";
import aboutImage from "./Pages/images/about.png";
import Contact from "./Pages/Contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="Homepage">
        <Header />
        <Feature />
        <About
          image={aboutImage}
          title="Test Your Application in Different Formats"
          button="Get Started"
        />

        <Contact />
      </div>
    ),
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
