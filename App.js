import React, { lazy, Suspense } from 'react'
import ReactDOM  from 'react-dom/client'
import Header from './src/components/page_layout/Header'

import Body from './src/components/page_layout/Body'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './src/utils/store';
import useOnline from './src/utils/useOnline';
import OfflineMessage from './src/components/OfflineMessage';
import ShimmerSearchPage from './src/components/shimmer/ShimmerSearchPage';
import ShimmerMenuPage from './src/components/shimmer/ShimmerMenuPage';
import Cart from './src/components/cart/Cart';
import RestaurantMenu from './src/components/menu/RestaurantMenu';
import PageInDevelopment from './src/components/PageInDevelopment';
import Error from './src/components/Error';
import Footer from './src/components/page_layout/Footer';
//lazy load the following components
const SearchBar = lazy(()=>import('./src/components/search/SearchBar'))
const Help = lazy(()=>import('./src/components/page_layout/Help'))
// const RestaurantMenu = lazy (()=> import('./src/components/RestaurantMenu'))
/**
 * 
 * APP LAYOUT
 *  - Header
 *      - Logo
 *      - Header Text
 *      - Search Bar
 *      - Icons(Sign in/login , cart)
 *  - Body
 *      - Restaurant List
 *      - Restaurant Cards
 *        - Image
 *        - Name
 *        - Meta data(rating, cuisines, price, time)
 *  - Footer
 *      - Copyright 
 *      - Reference Links
 * 
 */
const AppLayout = () => {
    const isOnline = useOnline()
    return(
        <>
            <Header />
            {isOnline ? <Outlet /> : <OfflineMessage />}   
            <Footer/>
            
        </>
    )
}
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error /> ,
        children: [
            {
                path : '/',
                element : <Body />
            },
            {
                path: '/search',
                element : <Suspense fallback={<ShimmerSearchPage />} >
                    <SearchBar />
                </Suspense>
            },
            {
                path : '/restaurants/:slug',
                element: <RestaurantMenu />
                // <Suspense fallback={<ShimmerMenuPage/>} >
                //     <RestaurantMenu />
                // </Suspense>
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/offers',
                element: <PageInDevelopment />
            },
            {
                path: '/help',
                element:  (
                    <Suspense
                      fallback={
                        <ShimmerMenuPage/>
                      }
                    >
                      {" "}
                      <Help />
                    </Suspense>
                  ),
            },
            {
                path: '/signin',
                element: <PageInDevelopment />
            }
        ]
    }
])
const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render( 
    <Provider store={store}>
        <RouterProvider router={appRouter} />
    </Provider> 
)
