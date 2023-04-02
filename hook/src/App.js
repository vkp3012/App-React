import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Statehook from './stateHook/statehook';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Statehook/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
