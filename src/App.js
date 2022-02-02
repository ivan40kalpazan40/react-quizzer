import { Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='main'>
      <Navbar />
      <Routes>
        <Route path='/categories' element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
