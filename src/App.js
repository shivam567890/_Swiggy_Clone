    import React from "react";
    import  ReactDOM,{createRoot}  from "react-dom/client";
     import '../index.css';
     import Header from "./Header";
     import Footer from "./Footer";
     import Body from "./Body";
     import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
    import About from "./About";
    import Error from "./Error";
    import Contact from "./Contact";
    import RestaurantMenu from "./RestaurantMenu";
  //React.createElement  => Object --> HTML(DOM).
    // const heading =React.createElement("h1",{
    //     id:"title",
    // },"Namastey React");

    // above heading is similar to <h1 id="title"> Namastey React</h1>

    // const heading1= <h1 id="title" key="h2"> Namastey React</h1>
    // It is working as Babel is converting JSX code into React.createElement  then it is converted 
    // into Object then -> HTML (DOM).




    const AppLayout = ()=>{
       return (
        <>
         <Header/>
         <Outlet/>
         <Footer/>
        </>
       );
    };

    const appRouter= createBrowserRouter([
       {
         path: '/',
         element:<AppLayout/>,
         errorElement:<Error/>,
         children:[
            {
               path: '/',
               element: <Body/>
            },
            {
               path: '/about',
               element: <About/>
            },
            {
               path: '/contact',
               element: <Contact/>
            },{
               path: '/restaurant/:id',
               element: <RestaurantMenu/>
            }
         ],

       },
    ]);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<RouterProvider router={appRouter} />);






