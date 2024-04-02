import { useEffect } from 'react'

export default function WindowEvent () {
  useEffect(() => {
    const handleDoubleClick = () => alert('worked');
    
    document.addEventListener("dblclick", handleDoubleClick);
    
    return () => document.removeEventListener("dblclick", handleDoubleClick);
  }, [])

  return (
    <h2>Window event active</h2>
  )
}
