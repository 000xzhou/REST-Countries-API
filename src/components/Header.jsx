import { useState, useEffect } from "react";
import Sun from '../assets/sun.svg'
import Moon from '../assets/moon.svg'
import DarkMode from "./DarkMode";

const Header = () => {


    return (
        <header>
            <div className={`inner-header`}>
                <div>Where in the world?</div>
                <DarkMode />
            </div>
        </header>
    )
}

export default Header