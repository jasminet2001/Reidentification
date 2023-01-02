import './App.css';
import { First } from './Component/First';
import {useState} from 'react';
import { Second } from './Component/Second';


function App() {
  const [isShown, setIsShown] = useState(false);
  const [isShownFirst, setIsShownFirst] = useState(true);
  const handleClick = event => {
    setIsShownFirst(current => !current);
    setIsShown(current => !current);
  };
  return (
    <div className="container">
      {isShownFirst && <First/>}
      {isShown && <Second/>}
      <button  type="button" class="btn btn-primary btn-lg" onClick={handleClick} >Click</button>
    </div>
  );
}

export default App;
