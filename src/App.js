import './App.css' ; 
import {BrowserRouter , Route , Routes , Link } from 'react-router-dom' ; 
import Home from './pages/Home';
import Login from './pages/Login';
function App() {
  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;
