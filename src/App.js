
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SearchLoyalty from './components/SearchLoyalty';
import ShowLoyalty from './components/ShowLoyalty';
import Login from './components/Login';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  // return <RouterProvider router={router} />;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<SearchLoyalty />} />
            <Route path="/loyalty" element={<ShowLoyalty />} />
            <Route path="/loyalty/:clientId" element={<ShowLoyalty />} />
          </Route>
        </Routes>
      </BrowserRouter>



    </div>
  );
}
