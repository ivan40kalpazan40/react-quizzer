import { Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Category from './components/Category';
import Quizz from './components/Quizz';
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
      </Routes>
      {/* <Footer /> */}
    </main>
  );
}

export default App;
