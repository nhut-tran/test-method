import React, { useState, useContext } from "react";
import MethodList from "./MethodList";
import MethodDetail from "./MethodDetail";
import MethodForm from "./MethodForm"
import Header from "./Header"
import { ThemeContext } from '../context/ThemeContext'

const DashBoard = () => {
    const [id, setId] = useState('');
    const { theme } = useContext(ThemeContext);
    const { bgMain, text } = theme.isLight ? theme.light : theme.dark
    return (
        <main className="dashboard" style={{ backgroundColor: bgMain, color: text }} >
            <Header />
            <div className="method">
                <MethodList setId={setId} id={id} />
                <MethodDetail id={id} />
                <MethodForm />
            </div>
        </main>
    )
}

export default DashBoard;