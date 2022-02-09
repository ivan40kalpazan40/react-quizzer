import { Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Category from './components/Category';
import Quizz from './components/Quizz';
import Results from './components/Results';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
// import Footer from './components/Footer';
function App() {
  return (
    <main className='main'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/categories/:id/:name' element={<Category />} />
        <Route path='/quizz/:id/:difficulty' element={<Quizz />} />
        <Route path='/results' element={<Results />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/logout' element={<Logout />} />
        <Route path='/auth/register' element={<Register />} />
      </Routes>
      {/* <Footer /> */}
    </main>
  );
}

export default App;
