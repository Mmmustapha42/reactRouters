import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import OrderSummary from "./components/OrderSummary";
import Nomatch from './components/NoMatch'
import Products from './components/Products'
import New from './components/New'
import Featured from "./components/Featured";
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';
import Profile from './components/Profile';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='order-summary' element={<OrderSummary/>}></Route>
      <Route path='*' element={<Nomatch/>}></Route>
      <Route path='products' element={<Products/>}>
      <Route index  element={<Featured/>}></Route>
      <Route path='featured' element={<Featured/>}></Route>
      <Route path='new' element={<New/>}></Route>
      </Route>
      <Route path='users' element={<Users/>}>
      <Route path=':userId' element={<UserDetails/>}></Route>
      <Route path='admin' element={<Admin/>}></Route>
      </Route>
      <Route path='profile' element={<Profile/>}></Route>
    </Routes>
    </>
  );
}

export default App;
