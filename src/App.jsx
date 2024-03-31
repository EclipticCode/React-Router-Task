import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavigationMenu from './Components/NavigationMenu'
import All from './Components/All'
import FullStack from './Components/FullStack'
import DataScience from './Components/DataScience'
import CyberSecurity from './Components/CyberSecurity'
import Blockchian from './Components/Blockchian'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavigationMenu/>}>
          <Route index element={<All/>}/>
          <Route path='full-stack' element={<FullStack/>}/>
          <Route path='data-science' element={<DataScience/>}/>
          <Route path='cyber-security' element={<CyberSecurity/>}/>
          <Route path='block-chain' element={<Blockchian/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App