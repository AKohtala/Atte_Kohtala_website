// Script and dark theme function by Miguel Grinberg (https://blog.miguelgrinberg.com/post/how-to-add-dark-mode-support-to-your-website)
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)')

    function updateTheme() {
      const theme = prefersDarkMode.matches ? 'dark' : 'light'
      document.documentElement.setAttribute('data-theme', theme)
    }

    updateTheme();
    prefersDarkMode.addEventListener("change", () => updateTheme());