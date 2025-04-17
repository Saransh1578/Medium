import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
//import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    // Get stored theme or default to system preference
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme) {
      setTheme(storedTheme)
      document.documentElement.classList.toggle("dark", storedTheme === "dark")
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setTheme(prefersDark ? "dark" : "light")
      document.documentElement.classList.toggle("dark", prefersDark)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative h-10 w-10 rounded-full border border-gray-300 bg-white dark:bg-black dark:border-gray-700 flex items-center justify-center transition-colors"
    >
      <Sun className="h-5 w-5 transition-all dark:hidden" />
      <Moon className="h-5 w-5 transition-all hidden dark:block" />
    </button>
  )
}
