import { createContext, useState, useContext } from 'react';
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('light');
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    return (<ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div
        className={`w-full min-h-screen flex items-center justify-center ${
          theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'
        }`}
      > 
           
            {children}
        </div>
    </ThemeContext.Provider>);
};
export const useTheme = () => useContext(ThemeContext);