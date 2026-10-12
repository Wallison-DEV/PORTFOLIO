'use client'

import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

// Runs before first paint (inlined in app/layout.tsx) to avoid a flash of the wrong theme.
export const themeInitScript = `(function(){try{var t=localStorage.getItem('${STORAGE_KEY}');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.setAttribute('data-theme',t)}catch(e){document.documentElement.setAttribute('data-theme','light')}})()`

export function useTheme() {
	const [theme, setTheme] = useState<Theme>('light')
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		const current = document.documentElement.getAttribute('data-theme')
		setTheme(current === 'dark' ? 'dark' : 'light')
		setMounted(true)
	}, [])

	const toggleTheme = useCallback(() => {
		const next: Theme = theme === 'dark' ? 'light' : 'dark'
		document.documentElement.setAttribute('data-theme', next)
		try {
			localStorage.setItem(STORAGE_KEY, next)
		} catch {}
		setTheme(next)
	}, [theme])

	return { theme, toggleTheme, mounted }
}
