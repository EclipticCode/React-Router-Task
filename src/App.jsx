import React from 'react'
import { BrowserRouter, Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import NavigationMenu from './Components/NavigationMenu'




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavigationMenu/>}>
        

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App