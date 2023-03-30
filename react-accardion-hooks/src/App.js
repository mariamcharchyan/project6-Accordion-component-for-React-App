import {useState, useEffect} from 'react';
import Accardion from './Accardion';
import Accardion2 from './Accardion2';
import './App.css';

function App() {
  //for  data
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://countriesnow.space/api/v0.1/countries/capital')
    .then(res => res.json())
    .then(data => setData(data.data))
  },[])

  //for Accardion2
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick2 = (i) => {
    if (activeIndex == i) {
      return setActiveIndex(null)
    }
    setActiveIndex(i)
  }
  
  return (
    <div className="wrapper">
      <h2>Accordion component for React App(hooks)</h2>
      <div className="accardion">
          <div className="accardion1">
            <h2>Accardion1</h2>
            {data.map((item,i) => (
              <Accardion item={item} key={i}/>
            ))}
          </div>
          <div className="accardion2">
            <h2>Accardion2</h2>
            {data.map((item, i) => (
              <Accardion2 item={item} i={i} handleClick2={handleClick2} activeIndex={activeIndex} key={i}/>
            ))}
          </div>
      </div>
    </div>
  );
}

export default App;
