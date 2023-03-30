import { Routes, Route} from 'react-router-dom';
import Accardions from './Accardions';
import './App.css';

function App() {
  return (
    <div className="App">
     <Routes>
          <Route path='/countries/:page' element={<Accardions />}/>
      </Routes>
    </div>
  );
}

export default App;