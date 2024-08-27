import { FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";

const ThemeComponent = () => {
    const [dark, setDark] = useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

    return (
        <div className="absolute left-20 right-0 top-9 z-50">
            <button onClick={()=> darkModeHandler()}>
                {
                    
                    dark && <FaSun fontSize={30} className="hover:shadow-lg hover:opacity-70"/>
                }
                {
                    !dark && <FaMoon fontSize={30} className="hover:shadow-lg hover:opacity-70"/>
                }
            </button>
        </div>
    );
}

export default ThemeComponent