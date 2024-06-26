import React from 'react';
import logo from "../assets/logo.png";
import { navItem } from '../constants';

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
             <div className="flex items-center flex-shrink-0">
                <img className='h-10 w-10 mr-2' src={logo} alt="logo" />
                <span className='text-xl tracking-tight'>VirtualR</span>
             </div>
             <div>
             {/* <ul className="hidden lg:flex ml-14 space-x-12">
                 {navItem.map((item, index)=>{
                    <li key={index}>
                    <a href={item.href}>{item.label}</a>
                    </li>
                 })}
             </ul> */}
             <ul className="hidden lg:flex ml-14 space-x-12">
                <li><a href="#">Features</a></li>
                <li><a href="#">Workflow</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Testimonials</a></li>
             </ul>
             </div>
             <div className='hidden lg:flex space-x-12 items-center'>
                <a href="#" className='py-2 px-3 border rounded-sm'>SignIn</a>
                <a href="#" className='py-2 px-3 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800'>Create an Account</a>
           </div>
          </div>
      </div>
    </nav>
  )
}

export default NavBar
