import { Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import RoomPage from'./pages/RoomPage'



function App() {
  const API_BASE= 'http://localhost:8081';
  return (
        <>
        <Routes>
          <Route path="/" element={<WelcomePage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/room" element={<RoomPage/>} />
        </Routes>
        </>
  )
}
export default App;