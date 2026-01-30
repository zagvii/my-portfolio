import React, { useState, useEffect } from 'react'

const useThemeSwitch = () => {

    const [theme, setTheme] = useState('dark');

      const toggleTheme = () => {
        if (theme === 'light') {
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        } else {
            localStorage.setItem('theme', 'light');
            setTheme('light');
        }
    };

    // Try to return localStorage with theme
    // Otherwise, catch browser preference
    useEffect(() => {
        const localTheme = localStorage.getItem('theme');

        if (localTheme) { 
            setTheme(localTheme); 
        } 
        else if (window.matchMedia('(prefers-color-scheme: light)').matches) { 
            setTheme('light'); 
        }

    }, []);

    // When theme is changes, add variable to CSS
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

  return [theme, toggleTheme];
}

export default useThemeSwitch