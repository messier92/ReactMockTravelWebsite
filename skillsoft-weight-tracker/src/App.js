import logo from './logo.svg';
import './App.css';
import Home from "./Components/home/home"
import Customers from "./Components/customers/customers"
import Register from "./Components/register/register"
import Login from "./Components/login/login"
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route exact path="/customers" component={Customers}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/login" component={Login}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
