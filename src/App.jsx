import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import ParkingMap from './pages/ParkingMap';
import BookingConfirmation from './pages/BookingConfirmation';
import UserProfile from './pages/UserProfile';
import AdminDashboard from './pages/AdminDashboard';
import ExitGate from './pages/ExitGate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="map" element={<ParkingMap />} />
          <Route path="ticket" element={<BookingConfirmation />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="exit" element={<ExitGate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
