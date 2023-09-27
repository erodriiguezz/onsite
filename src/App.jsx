import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./components/Login";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <>Register</> },
  { path: "/dashboard", element: <>Dashboard</> },
]);

function App() {
  const [count, setCount] = useState(0);

  return <RouterProvider router={router} />;
}

export default App;
