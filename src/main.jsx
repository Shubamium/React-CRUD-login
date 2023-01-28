import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from './pages/Home';
import Root from './pages/Root';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Logout from './action/Logout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route path='home' element={<Home/>}></Route>
      <Route path='auth'>
        <Route path='login' index element={<Auth/>}/>
        <Route path='logout' element={<Logout />}/>
        <Route path='register' element={<Auth/>}/>
      </Route>
      <Route path='dashboard' element={<Dashboard/>}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
