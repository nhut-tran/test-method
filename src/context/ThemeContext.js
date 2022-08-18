import React, { createContext, useState } from "react";


export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        isLight: false,
        dark: { bgMain: '#1d375a', text: '#fff', },
        light: { bgMain: '#fff', text: '#32323d' }
    })
    const changeTheme = () => {
        setTheme((prev) => ({ ...prev, isLight: !theme.isLight }));
    }
    return <ThemeContext.Provider value={{ theme, changeTheme }}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeContextProvider;