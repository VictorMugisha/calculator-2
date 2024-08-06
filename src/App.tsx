import { useEffect } from 'react';
import './App.css'
import Layout from './components/Layout'

function App() {
  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
        console.log(event.key)
    }
    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
}, []);
  return (
    <div className="min-w-full min-h-screen bg-custom-gray flex items-center justify-center">
      <Layout />
    </div>
  )
}

export default App
