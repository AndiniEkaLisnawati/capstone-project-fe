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
        <NavbarToggle className='gap-4 bg-[#00C81E] text-black' />

      <NavbarCollapse className='bg-amber-50 md:bg-white'>
        <NavbarLink href="/" className="text-amber-950 hover:!text-[#009F18] font-medium"> 
          Home
        </NavbarLink>
        <NavbarLink href="/challenges" className="text-amber-950 hover:!text-[#009F18] font-medium">Challenge</NavbarLink>        
        <NavbarLink href="/uploadimage" className="text-amber-950 hover:!text-[#009F18] font-medium">Upload Sampah</NavbarLink>
        <NavbarLink href="/education" className="text-amber-950 hover:!text-[#009F18] font-medium">Interactive Education</NavbarLink>
        <NavbarLink href="/dashboardpoint" className="text-amber-950 hover:!text-[#009F18] font-medium">Dashboard Point</NavbarLink>
      <div className="md:pl-45">
        {isLoggedIn ? (
          <>
          <Button
            onClick={() => navigate("/dashboard")}
            className="md:bg-[#00C81E] text-2xl pl-30 md:pl-5 md:text-base bg-amber-50 hover:bg-[#009F18] md:text-white text-amber-950 md:font-bold"
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
      </div>
      </NavbarCollapse>
    </Navbar>
    
    </>
  );
}

export default NavigationBar;
