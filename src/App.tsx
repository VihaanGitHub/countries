import React from 'react'
import useTheme from './hooks/useTheme'

export default function App() {
    const {theme,toggleTheme} = useTheme();
  return (
    <div className='text-text'>
        <p>App</p>
        <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  )
}
