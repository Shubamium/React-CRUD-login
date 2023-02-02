import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from './pages/Home';
import Root from './pages/Root';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Logout from './action/Logout';
import Login, { loginAction } from './pages/Login';
import Timeline, { timelineLoader } from './pages/Timeline';
import Register, { registerAction } from './pages/Register';
import Profile, { profileLoader } from './pages/Profile';
import './assets/main.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route path='home' element={<Home/>}></Route>
      <Route path='auth'>
        <Route path='login' index element={<Login/>} action={loginAction}/>
        <Route path='logout' element={<Logout />}/>
        <Route path='signup' element={<Register/>} action={registerAction}/>
      </Route>
      <Route path='dashboard' element={<Dashboard/>}>
        <Route index element={<Timeline/>} loader={timelineLoader}></Route>
      </Route>
      <Route path='profile/:username' element={<Profile/>} loader={profileLoader}>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
