import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Statehook from './stateHook/statehook';
import ReducerHook from './reducer/reducerHook';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Statehook/>} />
      <Route path="/reducer" element={<ReducerHook/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
