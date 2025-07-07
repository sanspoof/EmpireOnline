import { useState } from "react";

function Button({text}) {

  const [likes, setLikes] = useState(0);

  const handleClick = () => { 
    setLikes(likes + 1);
    console.log(likes);
  }

    return (
      <button
      onClick={handleClick}
      className="bg-brand text-white py-2 px-4 rounded hover:cursor-pointer active:translate-y-px"
      type='button'
      >
        {text}
      </button>
    );
  }

  export default Button;