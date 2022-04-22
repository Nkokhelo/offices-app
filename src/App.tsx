import { useEffect } from 'react';
import './App.scss';
import { OfficesService } from './services';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, View } from './pages';

function App() {
  // const officesService = new OfficesService();

  // useEffect(() => {
  //   const getOffices = async () => {
  //     const offices = await officesService.getAll();
  //     console.log(offices);
  //   }
  //   getOffices();
  // },[])
  return (
    <Router>
      <Routes>
        <Route path="/offices" element={<Home />} />
        <Route path="/offices/:id" element={<View />} />
      </Routes>
    </Router>
  );
}

export default App;
