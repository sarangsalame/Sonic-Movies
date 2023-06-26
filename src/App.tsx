
import './App.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home'
import PageNotFound from './components/PageNotFound';
import MovieDetails from './components/MovieDetails';
function App() {
 
  const router = createBrowserRouter([

    {
      path: "/",
      element: <Home/>,
    },
    {
      path:'/details/:id',
      element:<MovieDetails/>
    },

    {
      path:"*",
      element:<PageNotFound/>
    }
    
  ]);

 
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
