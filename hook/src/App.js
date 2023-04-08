import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Statehook from './stateHook/statehook';
import ReducerHook from './reducer/reducerHook';
import UseEffectHook from './useEffect/useEffectHook';
import RefHook from './refHook/refHook';
import LayoutEffect from './layoutEffect/layoutEffect';
import ImperativeHandle from './imperativeHandle/impertiveHandle';
import ContextHook from './contextHook/contextHook';
import MemoHook from './memoHook/memoHook';
import Todo from './todo/todo';
import Registration from './admin/registration';
import Game from './ticTocGame/game';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Statehook/>} />
      <Route path="/reducer" element={<ReducerHook/>} />
      <Route path="/useEffect" element={<UseEffectHook/>} />
      <Route path="/refHook" element={<RefHook/>} />
      <Route path="/layouteffect" element={<LayoutEffect/>} />
      <Route path="/imperativeHandle" element={<ImperativeHandle/>} />
      <Route path="/contextHook" element={<ContextHook/>} />
      <Route path="/memoHook" element={<MemoHook/>} />
      <Route path="/todo" element={<Todo/>} />
      <Route path="/registration" element={<Registration/>} />
      <Route path="/game" element={<Game/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
