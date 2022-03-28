import React,{ useEffect, useState, useCallback } from 'react'
import { Switch } from '@headlessui/react'

export default function DarkModeSwitcher() {
  const [enabled, setEnabled] = useState(true)
  const toggleDarkMode = useCallback((v) => {
    setEnabled(v)
    if (v) {
        // Whenever the user explicitly chooses dark mode
        localStorage.theme = 'dark'
    } else {
        // Whenever the user explicitly chooses light mode
        localStorage.theme = 'light'
    }
  }, [enabled])
  useEffect(() => {
    if (enabled || localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        if (enabled === false) {
            setEnabled(true)
        }
    } else {
        document.documentElement.classList.remove('dark')
    }
  }, [enabled])
  return (
            <Switch
                checked={enabled}
                onChange={toggleDarkMode}
                className={`${
                    (enabled ? 'bg-blue-600 ' : 'bg-gray-200 ')
                } relative inline-flex items-center h-6 my-1 rounded-full w-11`}
                >
                <span className="sr-only">Enable notifications</span>
                <span
                    className={`${
                    enabled ? 'translate-x-6' : 'translate-x-1'
                    } inline-block w-4 h-4 transform bg-white rounded-full`}
                />
            </Switch>
  )
}
