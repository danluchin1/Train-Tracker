import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { ThemeContextProps } from "../types/types";

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode}) => {
    const [theme, setTheme] = useState<string>(() => localStorage.getItem("theme") || "light");

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            return newTheme;
        });
    };

    useEffect(() => {
        document.body.classList.toggle("dark-mode", theme === "dark");
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if(!context){
        throw new Error("useTheme must be usede within ThemeProvider");
    }
    return context;
}