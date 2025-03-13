import { Routes, Route } from 'react-router-dom'
import SplashScreen from './pages/splash/SplashScreen'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Listings from './pages/listings/Listings'
import FarmDetail from './pages/farmDetail/FarmDetail'
import ListingDetail from './pages/listingDetail/ListingDetail'
import CreateListing from './pages/createListing/CreateListing'
import Profile from './pages/profile/Profile'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/listings" element={<Listings />} />
      <Route path="/farm/:id" element={<FarmDetail />} />
      <Route path="/listing/:id" element={<ListingDetail />} />
      <Route path="/create-listing" element={<CreateListing />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default App
