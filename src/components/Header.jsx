import { useState, useEffect } from "react";
import Sun from '../assets/sun.svg'
import Moon from '../assets/moon.svg'

const Header = () => {
    const [theme, setTheme] = useState('lightMode');
    const [themeName, setThemeName] = useState(
        <>
            <img className="darkModeIcon" src={Moon} alt="" />
            <div>Dark Mode</div>
        </>
    )
    const toggleTheme = () => {
        if (theme === "lightMode") {
            setTheme("darkMode")
            setThemeName(
                <>
                    <img className="darkModeIcon" src={Sun} alt="" />
                    <div>Light Mode</div>
                </>
            )
        } else {
            setTheme("lightMode")
            setThemeName(
                <>
                    <img className="darkModeIcon" src={Moon} alt="" />
                    <div>Dark Mode</div>
                </>
            )
        }
    }
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <header>
            <div className={`inner-header`}>
                <div>Where in the world?</div>
                <button className="darkModeBtn" onClick={toggleTheme}>{themeName}</button>
            </div>
        </header>
    )
}

export default Header