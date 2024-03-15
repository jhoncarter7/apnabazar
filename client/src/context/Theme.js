import { useContext, createContext } from "react";


const ThemeContext = createContext({
    themeMode: "light",
    darkMode: () => {},
    lightMode: () => {}
});


export const ThemeProvider = ThemeContext.Provider;

export const useTheme = () => {
    return useContext(ThemeContext)
}