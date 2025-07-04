import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { FilmIcon, TvIcon, CpuChipIcon, MusicalNoteIcon, ShoppingBagIcon, NewspaperIcon } from "@heroicons/react/24/outline";
import vipIcon from "../../assets/icons/vip.svg"; // Assuming you have a VIP icon

function MainNavigation() {

const strNavClasses = "text-white font-headings flex items-center gap-1.5";
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

    <nav className="flex justify-between items-center">
      <Link to="/">
        <h1 className="text-white uppercase font-empire-logo text-4xl tracking-tighter">Empire</h1>
      </Link>

      <div ref={elNav} className="flex gap-4.5">
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
        <div className={strNavClasses}>
          <ShoppingBagIcon className={strNavIconClass} />
          <span>Shopping</span>
        </div>
        <div className={strNavClasses}>
          <NewspaperIcon className={strNavIconClass} />
          <span>Magazine</span>
        </div>
        <div className={strNavClasses}>
          <img src={vipIcon} alt="VIP Icon" className={strNavIconClass} />
          <span>VIP</span>
        </div>
      </div>

      <div>
        <UserCircleIcon className="size-7.5 text-white" />
      </div>

    </nav>
  );
}

export default MainNavigation;