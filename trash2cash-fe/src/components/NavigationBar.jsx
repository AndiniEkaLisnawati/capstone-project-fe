import Logo from '../assets/images/Logo.png'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export default function NavigationBar() {
  return (
    <>
    
    <Navbar fluid rounded className="fixed top-0 left-0 w-full z-50 shadow-md h-20 pt-5">
      <NavbarBrand href="https://flowbite-react.com">
        <img src={Logo} className="h-20 sm:h-12 w-auto" alt="Trash2cash Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Trash2Cash</span>
      </NavbarBrand>
      <div className="flex md:order-2 ">
        <Button className="bg-[#00C81E] hover:bg-[#009F18] text-white font-bold"> Get started</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" className="text-amber-950 hover:!text-[#009F18] font-medium">
          Home
        </NavbarLink>
        <NavbarLink href="#" className="text-amber-950 hover:!text-[#009F18] font-medium">About</NavbarLink> 
        <NavbarLink href="#" className="text-amber-950 hover:!text-[#009F18] font-medium">Services</NavbarLink>
        <NavbarLink href="#" className="text-amber-950 hover:!text-[#009F18] font-medium">Location & Contact</NavbarLink>
        <NavbarLink href="#" className="text-amber-950 hover:!text-[#009F18] font-medium">Dashboard</NavbarLink>
      </NavbarCollapse>
    </Navbar>
    
    </>
  );
}
