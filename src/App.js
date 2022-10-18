import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Customers from "./Components/Customers"
import Manifesto from './Components/Manifesto';
import Rework from "./Components/Rework";
import Offerings from "./Components/Offerings"
import Footer from './Components/Footer';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Customers />
      <Manifesto />
      <Rework />
      <Offerings />
      <Footer />
    </>
  );
}

export default App;
