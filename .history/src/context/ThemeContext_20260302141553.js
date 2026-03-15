// import React, { createContext, useContext, useState, useEffect } from 'react';

// const ThemeContext = createContext();

// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) throw new Error('useTheme must be used within ThemeProvider');
//   return context;
// };

// export const ThemeProvider = ({ children }) => {
//   const [isDark, setIsDark] = useState(() => {
//     const saved = localStorage.getItem('crm-dark-mode');
//     return saved ? JSON.parse(saved) : false;
//   });

//   useEffect(() => {
//     if (isDark) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//     localStorage.setItem('crm-dark-mode', JSON.stringify(isDark));
//   }, [isDark]);

//   const toggleTheme = () => setIsDark(!isDark);

//   return (
//     <ThemeContext.Provider value={{ isDark, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };











import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : false;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return React.createElement(
    ThemeContext.Provider,
    { value: { isDark, toggleTheme } },
    children
  );
};