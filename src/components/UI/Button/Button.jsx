import { useState } from "react";
import styles from "./Button.module.scss";

function MyButton({text}) {

  const [likes, setLikes] = useState(0);

  const handleClick = () => { 
    setLikes(likes + 1);
    console.log(likes);
  }

    return (
      <button
      onClick={handleClick}
      className={styles.button}
      type='button'
      >
        {text}
      </button>
    );
  }

  export default MyButton;