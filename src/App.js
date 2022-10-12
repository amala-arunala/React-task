import './App.css';
import Login from './components/Login';
import {Routes, Route} from 'react-router-dom'
import Register from './components/Register';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';

function App() {  
  return (
    <div className="App">
      <Navbar />
       <Routes>
          <Route path='/' element={<Login />} exact/>
          <Route path='/register' element={<Register />} />
          <Route path='/mainpage' element={<MainPage />} />
          <Route path='/logout' element={<Logout />}/>
       </Routes>
    </div>
  );
}

export default App;
