import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Content from './Components/Content.jsx'
import Home from './Components/Home.jsx'
import Movie from './Components/Movie.jsx'
import News from './Components/News.jsx'
import Micro from './Components/Micro.jsx'
import SignIn from './Components/SignIn.jsx'
import SignUp from './Components/SignUp.jsx'


const router = createBrowserRouter([
  {path: "/", element: <App/>, children: [
    {path: "/", element: <Home/>},
    {path: "/Content", element: <Content/>},
    {path:"/News", element: <News/>},
    {path: "/Micro", element: <Micro/>}, 
    {path: "/Movie", element: <Movie/>},
    {path: "/Signin", element: <SignIn/>, action:() => {SignIn}},
    {path: "/Signup", element: <SignUp/>}
    
  ]},
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
   
  </React.StrictMode>,
)
