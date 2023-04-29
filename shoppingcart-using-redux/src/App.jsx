import {Routes,Route} from "react-router-dom"
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Cart from "./components/Cart"

function App() {

  return (
    <div className='App'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </div>
  )
}

export default App
