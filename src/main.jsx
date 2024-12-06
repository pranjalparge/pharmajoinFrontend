import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import Home from './pages/Home.jsx'
import JobApply from './pages/jobApplyForm/index.jsx'
import Privacy from './pages/privacyPolicy/index.jsx'
import AboutUs from './pages/aboutUs/index.jsx'
import PostYourJob from './pages/postyourjob/index.jsx'
import ContactUs from './pages/contactUs/index.jsx'
import Disclaimer from './pages/disclaimer/index.jsx'
import { Provider } from 'react-redux'
// import {Store} from "./config/Store.js"


const router = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    children : [
      {
        path : "/",
        element : <Home />
      },
     
    ]

  },
     {
      path : "/jobapply",
      element : <JobApply />
    },
    {
      path : "/privacypolicy",
      element : <Privacy />
    },
    {
      path : "/aboutUs",
      element : <AboutUs />
    },
    {
      path : "/postyourjob",
      element : <PostYourJob />
    },
    {
      path : "/contactUs",
      element : <ContactUs />
    },
    {
      path : "/disclaimer",
      element : <Disclaimer />
    },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider store={Store}> */}
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
    {/* </Provider> */}
  </StrictMode>,
)
