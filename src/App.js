import './App.css';
import ButtonF from './Components/Login/Button';
import Header from './Components/Login/Header';

import {InputF} from './Components/Login/Input';
import InputFooter from './Components/Login/InputFooter';
import CreatePassword from './Pages/CreatePassword';
import FinalLogin from './Pages/FinalLogin';
import SignInOrCreate from './Pages/SignInOrCreate';

function App() {
  return (
    <div className="App">
     <SignInOrCreate />
     <FinalLogin />
     <CreatePassword />
    </div>
  );
}

export default App;
