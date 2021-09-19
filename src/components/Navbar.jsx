import { Link } from "react-router-dom"
import phantom_logo from "../icons/phantom-logo.svg"
import hamb_icon from "../icons/hamburger-icon.svg"
import close_dropdown_icon from "../icons/close-dropdown-icon.svg"

export default function Navbar(props) {
    return (
        <nav id="navbar" class="backdrop-filter backdrop-blur-2xl flex flex-row 
        py-20 px-20 z-50 fixed w-full top-0 justify-between items-center">
  
          <div class="flex items-center">
            <img class="mr-10" id="logo-img" src={ phantom_logo } alt="phantom logo" />
            <h3 class="md:hidden font-bold">Phantom</h3>
            <p class="text-primary hidden font-medium md:block">Phantom</p>
          </div>
  
          <div id="navbar-links" class="hidden md:grid grid-flow-col auto-cols-min lg:gap-50 md:gap-30">
            <Link to="/" id="active-nav-link">Overview</Link>
            <Link to="/forecast">Weather</Link>
            <Link to="/login" class="whitespace-nowrap">Sign in</Link>
            <span class="relative" id="help-dropdown-toggle">
              <a href="#">Help<span class="text-base">▼</span></a>
              <div id="help-dropdown-content" class="">
                <a class="font-p2-md" href="#">Support</a>
                <a class="font-p2-md" href="#">Forum</a>
                <a class="font-p2-md" href="#">FAQ</a>
              </div>
            </span>
          </div>
  
          <button class="add-wallet-btn bg-btn-primary rounded-full hidden md:block text-primary" type="button">
            <p class="text-btn font-btn text-primary text-center">Add to Chrome</p>
          </button>
  
          <button class="md:hidden" height="40" width="40" type="button" id="menu-toggle">
            <img id="navbar-toggle-image" src={ hamb_icon } alt="hamburger" />
          </button>
  
          <div id="dropdown-menu" class="md:hidden hidden absolute p-30 w-29/30 mx-auto right-0 top-4 left-0 rounded-md bg-footer 
                focus:outline-none">
            <div class="flex flex-row justify-between items-center mb-10">
              <h3 class="font-medium">Phantom</h3>
              <button id="close-dropdown">
                <img id="close-dropdown-icon" src={ close_dropdown_icon } alt="close dropdown icon" />
              </button>
            </div>
            <ul class="text-white text-opacity-60 text-4xl">
              <li class="mb-10"><a class="md:text-p2-md md:font-p2-md" href="#">Overview</a></li>
              <li class="mb-10"><a class="md:text-p2-md md:font-p2-md" href="#">Security</a></li>
              <li class="mb-10"><a class="md:text-p2-md md:font-p2-md" href="#">Blog</a></li>
              <li class="mb-10"><a class="md:text-p2-md md:font-p2-md" href="#">Support</a></li>
            </ul>
          </div>
        </nav>
    );
}