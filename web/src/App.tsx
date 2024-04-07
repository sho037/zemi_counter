import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Laboratory } from './pages/Laboratory';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/laboratory/:id' element={<Laboratory />} />
      </Routes>
    </div>
  );
}

export default App;
