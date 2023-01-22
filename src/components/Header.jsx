import { useState, useEffect } from "react";

const Header = () => {
    const [theme, setTheme] = useState('light');
    const [themeName, setThemeName] = useState("Dark Mode")
    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("darkMode")
            setThemeName("Light Mode")
        } else {
            setTheme("light")
            setThemeName("Dark Mode")
        }
    }
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <header>
            <div className={`inner-header`}>
                <div>Where in the world?</div>
                <button onClick={toggleTheme}>{themeName}</button>
            </div>
        </header>
    )
}

export default Header