// import logo from './logo.svg';
import './App.css';
import Bat from './Components/Bat';
import {Provider} from 'react-redux';
import store from './redux/store';
import Ball from './Components/Ball';
import Vegtable from './Components/Vegtable';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Bat />
        <Ball />
        <Vegtable />
      </Provider>
    </div>
  );
}

export default App;
