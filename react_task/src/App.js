import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Manatee from './components/Manatee/Manatee';
import Narwhal from './components/Narwhal/Narwhal';
import Whale from './components/Whale/Whale';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Manatee/>} />
        <Route path="manatee" element={<Manatee/>} />
        <Route path="narwhal" element={<Narwhal/>} />
        <Route path="whale" element={<Whale/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
