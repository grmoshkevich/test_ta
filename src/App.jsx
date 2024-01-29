import './App.scss'

import {
  createBrowserRouter,
  NavLink,
  RouterProvider,
  Navigate,
  Outlet
} from "react-router-dom";

import CocktailDetail from './components/CocktailDetail';
import NotFound from './components/NotFound'

const cocktailCodes = ['margarita', 'mojito', 'a1', 'kir'];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Navigate replace to={`/${cocktailCodes[0]}`} />,
      },
      ...cocktailCodes.map(name => ({
          path: name,
          element: <CocktailDetail cocktailCode={name}/>,
      })),
      {
        path: "*",
        element: <NotFound/>
      },
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

function Root() {

  return (
    <>
      <nav className="navigation">
        <ul>
          {cocktailCodes.map((name) => (
            <li key={name}>
              <NavLink to={`/${name}`}>{name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default App;