const THEME_KEY = "theme"

export function setTheme(theme: "dark" | "light") {
  const html = document.querySelector("html")
  if (!html) return
  html.setAttribute("data-theme", theme)
  localStorage.setItem(THEME_KEY, theme)
}

export function initTheme() {
  const html = document.querySelector("html")
  if (!html) return
  html.setAttribute(
    "data-theme",
    localStorage.getItem(THEME_KEY) || getBrowserTheme()
  )
}

function getBrowserTheme() {
  const isDarkMode = window.matchMedia?.("(prefers-color-scheme: dark)").matches
  return isDarkMode ? "dark" : "light"
}

export function getTheme() {
  const html = document.querySelector("html")
  if (!html) return "dark"
  return html.getAttribute("data-theme") as "dark" | "light"
}
