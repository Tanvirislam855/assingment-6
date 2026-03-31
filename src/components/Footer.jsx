import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-neutral  p-10 ">
        <div className="flex flex-col md:flex-row justify-between container lg:max-w-7xl mx-auto text-neutral-content footer sm:footer-horizontal">
          <nav className="max-w-[300px]">
            <h2 className="text-3xl font-bold text-white">DigitTools</h2>
            <p className="text-gray-500">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
          </nav>
          <nav>
            <h2 className=" text-xl font-bold text-white">Product</h2>
            <a className="link link-hover">Features</a>
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">Templates</a>
            <a className="link link-hover">Integrations</a>
            
          </nav>
          
          <nav>
            
            <h2 className="text-xl font-bold text-white">Company</h2>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Press</a>
          </nav>
          <nav>
            <h2 className="text-xl font-bold text-white">Resources</h2>
            <a className="link link-hover">Documentation</a>
            <a className="link link-hover">Help Center</a>
            <a className="link link-hover">Community</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
            <h2 className="text-xl font-bold text-white">Social Links</h2>
            <div className="flex gap-2">
            {/* <a href=""> <className="text-3xl p-1 bg-white rounded-full text-black" /></a> */}
            <a href="">      
               <FaFacebookSquare className="text-3xl p-1 bg-white rounded-full text-black" />
            </a>
            <a href="">
            <BsTwitterX className="text-3xl p-1 bg-white rounded-full text-black" />
            </a>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;