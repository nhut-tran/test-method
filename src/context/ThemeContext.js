import React, { createContext, useState } from "react";


export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        isLight: false,
        dark: { bgMain: '#0F1724', text: '#FFFF', },
        light: { bgMain: '#f2f4f7', text: '#32323d' }
    })
    const changeTheme = () => {
        setTheme((prev) => ({ ...prev, isLight: !theme.isLight }));
    }
    return <ThemeContext.Provider value={{ theme, changeTheme }}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeContextProvider;