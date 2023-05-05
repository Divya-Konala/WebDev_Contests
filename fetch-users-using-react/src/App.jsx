import {Routes,Route, useNavigate} from "react-router-dom"
import './App.css'
import Login from './components/Login'
import ProfilePage from "./components/ProfilePage"
import PageNotFound from "./components/PageNotFound"
import { useSelector } from "react-redux"
import { useEffect } from "react"

function App() {
  const navigate=useNavigate();
  const loggedIn=useSelector(state=>state.validate.loggedIn);
  const data=useSelector(state=>state.validate.data);
  useEffect(()=>{
    if(loggedIn) navigate(`/user/${data.id}`)
  },[data,loggedIn])
  return <div className='App'>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/user/:id" element={<ProfilePage/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  </div>
}

export default App
