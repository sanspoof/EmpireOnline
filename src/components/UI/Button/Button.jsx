import { useState } from "react";

function MyButton({text}) {

  const [likes, setLikes] = useState(0);

  const handleClick = () => { 
    setLikes(likes + 1);
    console.log(likes);
  }

    return (
      <button
      onClick={handleClick}
      className="bg-brand text-white py-2 px-4 rounded"
      type='button'
      >
        {text}
      </button>
    );
  }

  export default MyButton;