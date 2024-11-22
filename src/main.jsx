import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import Home from './pages/Home.jsx'
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
      }
    ]
  }
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
