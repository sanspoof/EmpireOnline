import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { UserCircleIcon as UserCircleIconSolid, Cog8ToothIcon as Cog8ToothIconSolid } from "@heroicons/react/24/solid";
import { FilmIcon, TvIcon, CpuChipIcon, MusicalNoteIcon, ShoppingBagIcon, NewspaperIcon, Cog8ToothIcon } from "@heroicons/react/24/outline";
import vipIcon from "../../assets/icons/vip.svg"; 

function MainNavigation() {

const strNavClasses = "text-white font-headings flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-white/20 active:bg-white/25 transition-colors duration-100 cursor-pointer";
const strNavIconClass = "size-5.5 text-white";

const elNav = useRef(null); 

  useEffect(() => {

      const handleScroll = () => {



      };

    document.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (

    <nav className=" h-nav-height w-full border-b border-b-gray-500 absolute top-0 left-0 z-10 px-16">
      <div className="flex justify-between items-center h-nav-height ml-auto mr-auto max-w-(--site-container-max-width) px-6">
      <Link to="/">
        <h1 className="text-white uppercase font-empire-logo text-4xl tracking-tighter">Empire</h1>
      </Link>

      <div ref={elNav} className="flex items-center">
        <Link to="/movies" className={strNavClasses}>
          <FilmIcon className={strNavIconClass} />
          <span>Movies</span>
        </Link>
        <div className={strNavClasses}>
          <TvIcon className={strNavIconClass} />
          <span>TV</span>
        </div>
        <div className={strNavClasses}>
          <CpuChipIcon className={strNavIconClass} />
          <span>Gaming</span>
        </div>
        <div className={strNavClasses}>
          <MusicalNoteIcon className={strNavIconClass} />
          <span>Podcasts</span>
        </div>
        {/* <div className={strNavClasses}>
          <ShoppingBagIcon className={strNavIconClass} />
          <span>Shopping</span>
        </div> */}
        <div className={strNavClasses}>
          <NewspaperIcon className={strNavIconClass} />
          <span>Magazine</span>
        </div>
        <div className={strNavClasses}>
          <img src={vipIcon} alt="VIP Icon" className={strNavIconClass} />
          <span>VIP</span>
        </div>
      </div>

        <div className="flex items-center gap-0.5">
          <div className="relative group cursor-pointer" onClick={() => console.log("Settings clicked")}>
            <Cog8ToothIcon className="size-6 text-white group-hover:opacity-0 transition-opacity duration-200" />
            <Cog8ToothIconSolid className="size-6 text-white absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-active:active:translate-y-px" />
          </div>
          <div className="relative group cursor-pointer" onClick={() => console.log("User Profile clicked")}>
            <UserCircleIconSolid className="size-10 text-white/90 group-hover:text-white/100 group-active:active:translate-y-px" />
          </div>
        </div>
    </div>
    </nav>
  );
}

export default MainNavigation;