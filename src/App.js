import './App.css';
import Popup from './components/Popup';
import {useState} from 'react';
function App() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="App">
      <main>
        <h1>React Popups</h1>
        <button onClick={()=>setButtonPopup(true)}>Open Popup</button>
      
      </main>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h3>My popup</h3>
            <p>This my button trigger popup</p>
        </Popup>
    </div>
  );
}

export default App;
