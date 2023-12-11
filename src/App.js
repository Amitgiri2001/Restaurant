
import './App.css';
import NavFooter from './Components/Template/NavFooter';
import Home from './Pages/Home';
import Gallery from "./Components/Gallery/Gallery";
import Team from "./Components/Team/Team";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './Components/Contact/Contact';
import AboutUs from './Components/AboutUS/AboutUs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <NavFooter />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/team", element: <Team /> },

    ]
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
