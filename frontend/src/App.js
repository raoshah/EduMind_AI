import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import BottomNav from "./components/BottomNav";

import MainScreen from './screens/MainScreen';
import Profile from "./screens/ProfileScreen";
import Setting from "./screens/SettingScreen";
import About from "./screens/AboutScreen";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainScreen />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <AnimatedRoutes />
      <BottomNav />
    </Router>
  );
}

export default App;


