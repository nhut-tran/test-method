import React, { createContext, useEffect } from "react";
import useManageMethod from "../hooks/useManageMethod";

export const MethodContext = createContext()


const initFunction = () => {
    const methodList = localStorage.getItem("methodList");
    return methodList ? JSON.parse(methodList) : [];
}

const MethodContextProvider = ({ children }) => {

    const [methods, dispatch] = useManageMethod([], initFunction)

    useEffect(() => {
        localStorage.setItem("methodList", JSON.stringify(methods))
    }, [methods]);

    return <MethodContext.Provider value={{ methods, dispatch }}>
        {children}
    </MethodContext.Provider>
}

export default MethodContextProvider;