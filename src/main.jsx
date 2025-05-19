import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css'
import App from './App.jsx'
import Root from './Layouts/Root.jsx';
import Home from './components/Home/Home.jsx';
import AddCoffee from './components/AddCoffee/AddCoffee.jsx';
import CoffeeCard from './components/CoffeeCard/CoffeeCard.jsx';
import UpdateCoffee from './components/UpdateCoffee/UpdateCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "/addcoffee",
        Component: AddCoffee,
      },
      {
        path: "coffees/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: CoffeeCard,
      },
      {
        path: "coffees/edit/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/coffees/edit/${params.id}`),
        Component:UpdateCoffee,
      },
      {
        path:"/signup",
        Component:

      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
