import { motion } from "framer-motion";
import Home from "./views/Home"; // importing the Home page
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="font-poppins bg-gray-50 text-gray-900"
      >
        <Home />
      </motion.div>
    </BrowserRouter>
  );
}

export default App;
