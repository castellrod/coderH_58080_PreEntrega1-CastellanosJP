import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from "./components/Navbar";
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';


function App() {
  //const [count, setCount] = useState(0)

  return (
    <main className='main'>
        <Navbar />
        <ItemListContainer saludoscompa="Hola amigo, Hola amigo!" />
        <Footer />
    </main>
  );
  
}

export default App;
