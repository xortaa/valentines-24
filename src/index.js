import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./routes/root"
import ErrorPage from "./error-page"
import Valentine from "./routes/valentine"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "to-my-valentine",
    element: <Valentine />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
