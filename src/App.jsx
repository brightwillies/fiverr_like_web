import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Gigs from "./pages/Gigs/Gigs";
import Gig from "./pages/Gig/Gig";
import Orders from "./pages/Orders/Orders";
import Messages from "./pages/Messages/Messages";
import Message from "./pages/Message/Message";
import Add from "./pages/Add/Add";
import Mygigs from "./pages/Mygigs/Mygigs";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import  "./app.scss";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";


import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import Pay from "./pages/Pay/Pay";
import Success from "./pages/Success/Success";



function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <div className="app">
          <QueryClientProvider client={queryClient}>
        <Navbar />
        <Outlet />
        <Footer />
        </QueryClientProvider>
      </div>
    )
  }
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children : [
        {
          path  :"/", 
          element : <Home/>
        },
        {
          path  :"/gigs", 
          element : <Gigs/>
        },
        {
          path  :"/gig/:id", 
          element : <Gig/>
        },   
        {
          path: "/myGigs",
          element: <Mygigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/register",
          element: <Register/>,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },

        {
          path: "/pay/:id",
          element: <Pay />,
        },
        {
          path: "/success",
          element: <Success />,
        },
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
      {/* <Navbar></Navbar> */}

    </div>
  )
}

export default App
