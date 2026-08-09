import { createContext, useEffect, type ReactNode, useState } from "react";
import type { Theme } from "../types/theme";

const ThemeContext = createContext<Theme | null>(null);

function ThemeProvider({children}:{children:ReactNode}){
    const [theme,setTheme] = useState<string>(
        typeof window !== "undefined" ? (localStorage.getItem('theme') ??
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light")) : "light"
    );
    useEffect(()=>{
        localStorage.setItem("theme",theme)
        if (theme === "dark"){
            document.documentElement.setAttribute("data-theme","dark")
        }
        else{
            document.documentElement.setAttribute("data-theme","light")
        }        
    },[theme]);

    const toggleTheme = ()=>{
        setTheme(theme === "dark" ? "light" : "dark")
    }
    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeProvider;
export { ThemeContext };