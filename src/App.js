import './App.css';
import LoginPage from './page/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './page/HomePage';

function App() {
  
  return (
   <>
   <Router>

    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/home' element={<HomePage/>}/>
  
    </Routes>

   </Router>
   </>
  );
}

export default App;
