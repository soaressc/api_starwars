import { useState } from 'react'
import './App.css'
import { BrowserRouter } from "react-router-dom";
import Navbar from "./componentes/layouts/Navbar.jsx"
import Content from './componentes/layouts/Content.jsx';

// Componente principal 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Navbar />
          <Content />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

App.js



