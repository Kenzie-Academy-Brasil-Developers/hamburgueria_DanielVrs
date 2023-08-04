import { ToastContainer } from "react-toastify";
import { HomePage } from "./pages/HomePage";
import 'react-toastify/dist/ReactToastify.min.css';
import "../src/styles/index.scss";

function App() {
  return (
    <>
      <HomePage />
			<ToastContainer position="bottom-right" autoClose={1.5 * 1000}/>
    </>
  );
};

export default App
