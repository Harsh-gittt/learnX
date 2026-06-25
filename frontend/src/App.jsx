import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Page1 from './components/Page1'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Page1 />} />
    </Routes>
  )
}

export default App
