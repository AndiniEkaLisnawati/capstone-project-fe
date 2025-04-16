import Logo from '../assets/images/Fix-Logo.png'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


const NavigationBar = ({isLoggedIn}) => {
  const navigate = useNavigate();

  return (
    <>
    
    <Navbar fluid rounded className="fixed top-0 left-0 w-full z-50 shadow-md h-20 pt-5">
    <NavbarBrand href="">
      <img
        src={Logo}
        alt="Trash2cash Logo"
        className="pl-10 h-10 sm:h-12 md:h-14 lg:h-16 w-auto max-w-full"
      />
    </NavbarBrand>
      <div className="flex md:order-2">
        {isLoggedIn ? (
          <>
          <Button
            onClick={() => navigate("/dashboard")}
            className="bg-[#00C81E] hover:bg-[#009F18] text-white font-bold"
            >
            Dashboard
          </Button>
          </>
        ) : (
          <Button
            onClick={() => navigate("/register")}
            className="bg-[#00C81E] hover:bg-[#009F18] text-white font-bold"
          >
            Get Started
          </Button>
        )}
        <NavbarToggle />
      </div>
      
      <NavbarCollapse>
        <NavbarLink href="/" className="text-amber-950 hover:!text-[#009F18] font-medium"> 
          Home
        </NavbarLink>
        <Link to="/challenges" className="text-amber-950 hover:!text-[#009F18] font-medium">Challenge</Link>        
        <NavbarLink href="#" className="text-amber-950 hover:!text-[#009F18] font-medium">Services</NavbarLink>
        <NavbarLink href="#" className="text-amber-950 hover:!text-[#009F18] font-medium">Location & Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
    
    </>
  );
}

export default NavigationBar;
