import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LinkContainer from "./components/LinkContainer"
import Accordion from './components/pages/Accordion';
import Link from './components/Link';
function App() {
  const [hideLink, setHideLink] = useState(false)
  const hideLinkHandler = () => {
    setHideLink(!hideLink)
  }
  console.log(useState(false))
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Edit <code>src/App.js</code> and save to reload.
        </p>
       { hideLink ?   <LinkContainer /> : null }
        <br />
        <button onClick={hideLinkHandler}>{hideLink ? "Hide Links" : "Show links"}</button>
      </header>
    </div>
  );
}

export default App;
