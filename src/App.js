import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Error from './components/Error';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';

// import Grocery from './components/Grocery'; // for lazy we won't import it like this

// for lazy loading we will import the component like this:
const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
    return (
        <div className='app relative min-h-screen'>
            <Header />
            <Outlet />
        </div>
    )
};

// react-router-dom package provides us the "createBrowserRouter" to create a router
// Now, inside this createBrowserRouter we have to define the configuration ==> configuration means the information that defines what will happen on a specific path.
// After creating the router, we need to provide it to the App component, to implement it in our application, adn that is done by another component "RouterProvider" ==> which is given by the react-router-dom and used to provide the router to the App.
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>
            },
        ],
        errorElement: <Error />
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

