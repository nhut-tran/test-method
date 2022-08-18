import React, { useState, useContext } from "react";
import MethodList from "./MethodList";
import MethodDetail from "./MethodDetail";
import { ThemeContext } from '../context/ThemeContext'

const DashBoard = () => {
    const [id, setId] = useState('');
    const { theme, changeTheme } = useContext(ThemeContext);
    const { bgMain, text } = theme.isLight ? theme.light : theme.dark
    return (
        <main className="dashboard" style={{ backgroundColor: bgMain, color: text }} >
            <button onClick={changeTheme}>Change Theme</button>
            <MethodList setId={setId} id={id} />
            {id && <MethodDetail id={id} />}
        </main>
    )
}

export default DashBoard;