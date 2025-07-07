import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

function Button({text}) {

  const [likes, setLikes] = useState(0);

  const handleClick = () => { 
    setLikes(likes + 1);
    console.log(likes);
  }

    return (
      <button
      onClick={handleClick}
      className="bg-brand text-white font-bold py-2 px-4 rounded hover:cursor-pointer active:translate-y-px flex items-center gap-2"
      type='button'
      >
        {text}
        <ArrowRightIcon className="inline-block size-5" />
      </button>
    );
  }

  export default Button;