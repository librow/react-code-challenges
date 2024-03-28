import { useState } from 'react';

export default function DarkMode () {
  const [theme, setTheme] = useState('light');

  return (
    <div className={`page ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <button className='dark-mode-button' onClick={() => setTheme('dark')}>Dark Mode</button>
      <button className='light-mode-button' onClick={() => setTheme('light')}>Light Mode</button>
    </div>
  )
}
