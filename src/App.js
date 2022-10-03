import './App.css';
import './styles.css'
import ButtonF from './Components/Login/Button';
import Header from './Components/Login/Header';

import {InputF} from './Components/Login/Input';
import InputFooter from './Components/Login/InputFooter';
import Navbar from './Components/Navbar';
import CreatePassword from './Pages/CreatePassword';
import FinalLogin from './Pages/FinalLogin';
import SignInOrCreate from './Pages/SignInOrCreate';
import AllRoutes from './Components/AllRoutes';


function App() {
  return (
    <div className="App">
     <Navbar />
     <AllRoutes />

   
   
    </div>
  );
}

export default App;
