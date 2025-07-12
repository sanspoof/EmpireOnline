import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { 
  UserCircleIcon as UserCircleIconSolid, 
  Cog8ToothIcon as Cog8ToothIconSolid,
  FilmIcon as FilmIconSolid,
  TvIcon as TvIconSolid,
  CpuChipIcon as CpuChipIconSolid,
  MusicalNoteIcon as MusicalNoteIconSolid,
  NewspaperIcon as NewspaperIconSolid,
  TrophyIcon as TrophyIconSolid
} from "@heroicons/react/24/solid";
import { FilmIcon, TvIcon, CpuChipIcon, MusicalNoteIcon, ShoppingBagIcon, NewspaperIcon, Cog8ToothIcon, Bars2Icon, XMarkIcon, TrophyIcon } from "@heroicons/react/24/outline";
import Logo from "../UI/Logo/Logo";
import vipIcon from "../../assets/icons/vip.svg"; 

function MainNavigation({ onSettingsClick }) {

const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

const strNavClasses = "group text-white font-headings flex items-center gap-1.5 px-2 py-2 rounded-lg hover:bg-white/15 active:bg-white/25 transition-colors duration-100 cursor-pointer transition-opacity duration-200";

const strNavIconClass = "size-5.5 group-hover:opacity-0 transition-opacity duration-200";
const strNavSolidIconClass = "size-5.5 text-white group-hover:opacity-100 absolute opacity-0 transition-opacity duration-200"

const strNavMobileLinkClass = "text-white font-headings text-5xl";

const elNav = useRef(null); 

  function openMobileMenu() {

    setIsMobileMenuOpen(true);

    document.body.style.overflow = "hidden"; 

  }

  function closeMobileMenu() {

    setIsMobileMenuOpen(false);

    document.body.style.overflow = "auto";

  }

  return (

    <nav className=" h-nav-height w-full border-b border-b-gray-500 absolute top-0 left-0 z-100 body-padding">
      <div className="flex justify-between items-center h-nav-height ml-auto mr-auto max-w-(--site-container-max-width) px-6">
      <Link to="/">
        <Logo />
      </Link>

      <div ref={elNav} className="items-center hidden lg:flex">
        <Link to="/movies" className={strNavClasses}>
          <div className="relative">
            <FilmIconSolid className={strNavSolidIconClass} />
            <FilmIcon className={strNavIconClass} />
          </div>
          <span>Movies</span>
        </Link>
        <div className={strNavClasses}>
          <div className="relative">
            <TvIconSolid className={strNavSolidIconClass} />
            <TvIcon className={strNavIconClass} />
          </div>
          <span>TV</span>
        </div>
        <div className={strNavClasses}>
          <div className="relative">
            <CpuChipIconSolid className={strNavSolidIconClass} />
            <CpuChipIcon className={strNavIconClass} />
          </div>
          <span>Gaming</span>
        </div>
        <div className={strNavClasses}>
          <div className="relative">
            <MusicalNoteIconSolid className={strNavSolidIconClass} />
            <MusicalNoteIcon className={strNavIconClass} />
          </div>
          <span>Podcasts</span>
        </div>
        {/* <div className={strNavClasses}>
          <ShoppingBagIcon className={strNavIconClass} />
          <span>Shopping</span>
        </div> */}
        <div className={strNavClasses}>
          <div className="relative">
            <NewspaperIconSolid className={strNavSolidIconClass} />
            <NewspaperIcon className={strNavIconClass} />
          </div>
          <span>Magazine</span>
        </div>
        <div className={strNavClasses}>
          <div className="relative">
            <TrophyIconSolid className={strNavSolidIconClass} />
            <TrophyIcon className={strNavIconClass} />
          </div>
          <span>VIP</span>
        </div>
      </div>
      <div className={strNavClasses + " lg:hidden"} onClick={openMobileMenu}>
        <Bars2Icon className={strNavIconClass} />
        <span>Menu</span>
      </div>

        <div className="items-center gap-0.5 hidden lg:flex">
          <div className="relative group cursor-pointer" onClick={onSettingsClick}>
            <Cog8ToothIcon className="size-7 text-white group-hover:opacity-0 transition-opacity duration-200" />
            <Cog8ToothIconSolid className="size-7 text-white absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-active:active:translate-y-px" />
          </div>
        </div>
    </div>

    <div className={`overflow-auto w-full h-full fixed top-0 left-0 flex bg-black z-30 align-items-center justify-center text-white p-16 ${isMobileMenuOpen ? 'flex' : 'hidden'}`}>
          <button className="flex items-center absolute top-4 right-4 text-white font-bold text-base hover:text-gray-300" onClick={closeMobileMenu}>
            
            <XMarkIcon className="size-5 text-white" />
            <span>Close</span>
            </button>
          <div className="flex flex-col items-baseline justify-center gap-4 w-full">
              <Link to="/movies" className={strNavMobileLinkClass} onClick={closeMobileMenu}>Movies</Link>
              <Link to="/" className={strNavMobileLinkClass} onClick={closeMobileMenu}>TV</Link>
              <Link to="/" className={strNavMobileLinkClass} onClick={closeMobileMenu}>Gaming</Link>
              <Link to="/" className={strNavMobileLinkClass} onClick={closeMobileMenu}>Podcasts</Link>
              <Link to="/" className={strNavMobileLinkClass} onClick={closeMobileMenu}>Magazine</Link>
              <Link to="/" className={strNavMobileLinkClass} onClick={closeMobileMenu}>VIP</Link>
              <span className="block w-12 border-b border-white"></span>
              <Link to="/" className="text-white font-headings text-3xl" onClick={closeMobileMenu}>Settings</Link>
          </div>
    </div>


    </nav>
  );
}

export default MainNavigation;