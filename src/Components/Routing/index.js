import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ListsandKeys from '../stylings/ListsandKeys'
import FuncComp from '../../FuncComp'
import Home from '../Home'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/listsandkeys' element={<ListsandKeys />} />
            <Route path='funcComponent' element={<FuncComp />} />
        </Routes>
    </div>
  )
}

export default Routing