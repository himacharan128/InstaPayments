let currentTheme = {};

export const setTheme = (themeData) => {
  currentTheme = themeData;
  applyTheme(currentTheme);
};

export const getTheme = () => {
  return currentTheme;
};

const applyTheme = (theme) => {
  const root = document.documentElement;
  root.style.setProperty('--background', theme['--background']);
  root.style.setProperty('--foreground', theme['--foreground']);
  root.style.setProperty('--primary', theme['--primary']);
  root.style.setProperty('--primary-foreground', theme['--primary-foreground']);
};
