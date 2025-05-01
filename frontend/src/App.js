import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import BottomNav from "./components/BottomNav";

import MainScreen from './screens/MainScreen';
import Profile from "./screens/ProfileScreen";
import Setting from "./screens/SettingScreen";
import Topics from "./screens/TopicsScreen";
import Topic from "./components/Topic";
import Footer from "./components/Footer"

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainScreen />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topic/:topicId" element={<Topic />} />
        
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <AnimatedRoutes />
      <div style={{marginTop:"10%"}}></div>
      <Footer/>
      <BottomNav />
    </Router>
  );
}

export default App;


