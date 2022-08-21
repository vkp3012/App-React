// import logo from './logo.svg';
import './App.css';
import 'h8k-components'

// import Slideshow from './components/Slideshow';
// import {BrowserRouter} from 'react-router-dom'
import Hello from './components/Hello';

const title = "Slideshow App"


function App({slides}) {
  return (
      <div>
        <h8k-navbar header={title}></h8k-navbar>
        <div className='App'>
          <Hello slides={slides}/>
        </div>
      </div>
  );
}

export default App;
