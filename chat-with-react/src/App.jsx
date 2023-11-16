import InitialLayout from './layouts/InitialLayout';
import Login from './components/login';
import Chat from './components/chat';
import { createBrowserRouter, Outlet, RouterProvider, useNavigate } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <InitialLayout />,
    children: [
      {
        path: "/",
        element: <Login />
      },
      {
        path:'/auto-atendimento',
        element:<Chat />
      }
    ]
  }
]);
function App() {
  
  return (

    <RouterProvider router={router} />
  )
}

export default App
