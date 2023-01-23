import React, { useState, useEffect } from 'react'
import Sun from '../assets/sun.svg'
import Moon from '../assets/moon.svg'

const DarkMode = () => {
    let darkMode = localStorage.getItem("darkMode")
    const [themeName, setThemeName] = useState(
        <>
            <img className="darkModeIcon" src={Moon} alt="" />
            <div>Dark Mode</div>
        </>
    )

    const enableDarkMode = () => {
        document.body.classList.add("darkMode")
        localStorage.setItem("darkMode", "enabled")
    }

    const disableDarkMode = () => {
        document.body.classList.remove("darkMode")
        localStorage.setItem("darkMode", "disable")
    }

    const setDarkTheme = () => {
        setThemeName(
            <>
                <img className="darkModeIcon" src={Sun} alt="" />
                <div>Light Mode</div>
            </>
        )
    }
    const setLightTheme = () => {
        setThemeName(
            <>
                <img className="darkModeIcon" src={Moon} alt="" />
                <div>Dark Mode</div>
            </>
        )
    }

    const darkModeToggle = () => {
        darkMode = localStorage.getItem("darkMode")

        if (darkMode !== "enabled") {
            enableDarkMode()
            setDarkTheme()
        } else {
            disableDarkMode()
            setLightTheme()
        }
    }
    useEffect(() => {
        darkMode === "enabled" ? enableDarkMode() : disableDarkMode()
    }, []);

    return (
        <button className="darkModeBtn" onClick={darkModeToggle}>{themeName}</button>
    )
}

export default DarkMode