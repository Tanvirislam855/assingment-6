
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-neutral  p-10 ">
        <div className="flex flex-col md:flex-row justify-between container lg:max-w-7xl mx-auto text-neutral-content footer sm:footer-horizontal">
          <nav className="max-w-[300px]">
            <h2 className="text-3xl font-bold text-white">DigitTools</h2>
            <p className="text-gray-500">Premium digital tools for creators, professionals, and businesses. Work smarter  with our suite of powerful tools.</p>
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
            <a href="">      
               <i class="fa-brands fa-facebook text-3xl p-1 bg-white rounded-full text-black"></i>
            </a>
            <a href="">
            <i class="fa-brands fa-linkedin text-3xl bg-white rounded-full text-black p-1"></i>
            </a>
            <a href="">
            <i class="fa-brands fa-instagram text-3xl bg-white rounded-full text-black p-1 "></i>
            
            </a>
            </div>
          </nav>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 px-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
  
  {/* Left */}
  <p>© 2026 Digitools. All rights reserved.</p>

  {/* Right */}
  <div className="flex gap-6 mt-4 md:mt-0">
    <a href="#" className="hover:text-white">Privacy Policy</a>
    <a href="#" className="hover:text-white">Terms of Service</a>
    <a href="#" className="hover:text-white">Cookies</a>
  </div>

</div>
      </footer>
    </div>
  );
};

export default Footer;