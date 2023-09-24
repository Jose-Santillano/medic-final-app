import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//Views testing
import Chat from './views/Chat';

//Views
import Paciente from './views/Paciente';
import Monitor from './views/Monitor';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Paciente />} />
        <Route path="/chatbotia" element={<Chat />} />
        <Route path="/monitoreo" element={<Monitor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
