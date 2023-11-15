
import { useState } from "react";
import { Link } from "react-router-dom";
         // React Elememt  (Object)
         export const Title= ()=>(
            <Link to="/">
            <img className="logo" src="https://scontent.fvns1-4.fna.fbcdn.net/v/t39.30808-6/302275887_487537640050648_5998956273504369200_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=q4_TlBM8iuoAX9X__Yr&_nc_ht=scontent.fvns1-4.fna&oh=00_AfBBJ4rnz4a11aa72NuQS-QcTFBnBoynkRcukAoPCi41VQ&oe=652E93AE" alt=" Food Villa Logo" />
            </Link>
          );
   
   //Functional Component of react 
     const Header= ()=>{
      const [isLoggedin, setisLoggedin]= useState(false);
        return (
         <div className="header">
           <Title/>
            <div className="nav-items">
                    <ul>
                       <li><Link to="/">Home</Link> </li>
                       <li><Link to="/about">About Us</Link> </li>
                       <li><Link to="/contact">Contact Us</Link> </li>
                       <li>Cart</li>
                    </ul>
               
            </div>
            {isLoggedin ? 
               <button onClick={()=>{setisLoggedin(false)}}>Logout</button> 
               : <button onClick={()=>{setisLoggedin(true)}}>Login</button>}
         </div>
        );
    };

    export default Header;