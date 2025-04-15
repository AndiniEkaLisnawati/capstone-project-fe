import Logo from '../assets/images/Logo.png'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


const NavigationBar = ({isLoggedIn}) => {
  const navigate = useNavigate();

  return (
    <>
    
    <Navbar fluid rounded className="fixed top-0 left-0 w-full z-50 shadow-md h-20 pt-5">
      <NavbarBrand href="https://flowbite-react.com">
        <img src={Logo} className="h-20 sm:h-12 w-auto" alt="Trash2cash Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Trash2Cash</span>
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
        <NavbarLink href="/challenges" className="text-amber-950 hover:!text-[#009F18] font-medium">Challenge</NavbarLink>        
        <NavbarLink href="/uploadimage" className="text-amber-950 hover:!text-[#009F18] font-medium">Upload Sampah</NavbarLink>
        <NavbarLink href="/education" className="text-amber-950 hover:!text-[#009F18] font-medium">Interactive Education</NavbarLink>
        <NavbarLink href="/dashboardpoint" className="text-amber-950 hover:!text-[#009F18] font-medium">Dashboard Point</NavbarLink>
      </NavbarCollapse>
    </Navbar>
    
    </>
  );
}

export default NavigationBar;
