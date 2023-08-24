import './App.css';
import EventList from './components/EventList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './components/Login';
import MyEventList from './components/MyEventList';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<EventList/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/myevents' element={<MyEventList/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
