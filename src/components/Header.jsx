import React, { useContext } from "react";
import { FaSun } from 'react-icons/fa';
import { FaToggleOn } from 'react-icons/fa';
import { FaToggleOff } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';
import { ThemeContext } from "../context/ThemeContext";
const Header = () => {
    const { theme, changeTheme } = useContext(ThemeContext);
    return (
        <header className="header">
            <h1>Lab testing method management</h1>
            <div>
                <FaMoon size={30} />
                {theme.isLight ? <FaToggleOn size={30} onClick={changeTheme} /> : <FaToggleOff size={30} onClick={changeTheme} />}
                <FaSun size={30} />

            </div>
        </header>
    )
}

export default Header;