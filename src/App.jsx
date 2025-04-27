import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <h1>TP2 React</h1>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
        <h2>Vite + React (grupo 123)</h2>
        <Routes>
          {/* en Element y entre llaves van los components de cada pagina que creemos. Ej {<Home/>} o {<Contacto/>} */}
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
