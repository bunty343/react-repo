import './App.css';
import Counter from './components/counter/Counter';
import Accordion from "./components/pages/Accordion/index"
import User from './components/user/User';
import CreateAccount from './components/auth/CreateAccount';
function App() {
  return (
    <div className="App">
      <Accordion />
      <br />
      <Counter />
      <br />
      <User />
    </div>
  )
}

export default App;


