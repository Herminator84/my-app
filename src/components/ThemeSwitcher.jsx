function ThemeSwitcher({ theme, toggleTheme }) {
    return (
      <button className="theme-switcher" onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    );
  }
  
  export default ThemeSwitcher;
  