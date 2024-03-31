import React from 'react'
import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import NavigationMenu from './Components/NavigationMenu'
import All from './Components/All'
import FullStack from './Components/FullStack'
import DataScience from './Components/DataScience'
import CyberSecurity from './Components/CyberSecurity'
import Career from './Components/Career'




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavigationMenu/>}>
          <Route index element={<All/>}/>
          <Route path='full-stack' element={<FullStack/>}/>
          <Route path='data-science' element={<DataScience/>}/>
          <Route path='cyber-security' element={<CyberSecurity/>}/>
          <Route path='career' element={<Career/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App