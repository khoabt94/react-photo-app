import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AddEditPage from './features/Photo/pages/AddEditPage';
import MainPage from './features/Photo/pages/MainPage';

function App() {
  return (
    <div className="photo-app">
      <Header />
      <Routes>
        <Route path="/photo" element={<MainPage />} />
        <Route path="/photo/add" element={<AddEditPage />} />
        <Route path="/photo/:photoId" element={<AddEditPage />} />
      </Routes>
    </div>
  );
}

export default App;
