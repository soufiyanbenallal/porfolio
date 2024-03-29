import { useEffect, useState } from 'react'

export default function useTheme() {
    const [isDark, setIsDark] = useState<boolean>(true)
    useEffect(() => {
        const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        setIsDark(isDark)
        const el = document.documentElement.classList
        isDark ? el.add('dark') : el.remove('dark');
    }, [isDark])
    
  return {
    isDark,
    setIsDark
  }
}
