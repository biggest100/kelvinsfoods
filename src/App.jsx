// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
// import { Cart } from './Pages/Cart/Cart'
import Placeorder from './Pages/Placeorder/Placeorder'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'
import Cart from './Pages/Cart/Cart'
import './App.css'

const App = () => {

 const[showlogin,setshowlogin] = useState(false)

  return (
    <>
    {showlogin?<LoginPopup setshowlogin={setshowlogin} />: <> </> }


      <div className='app'>
     
        <Navbar setshowlogin={setshowlogin} />
        
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/Cart' element={<Cart />} /> */}
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/order' element={<Placeorder />} />
        </Routes>
      </div>
      <Footer />


    </>

  )
}

export default App
