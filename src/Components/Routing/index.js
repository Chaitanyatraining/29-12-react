import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ListsandKeys from '../stylings/ListsandKeys'
import FuncComp from '../../FuncComp'
import Home from '../Home'
import ContactUs from '../ContactUs'
import LifeCycleMethods from '../LifeCycleMethods'
import Pagination from '../Pagination'
import UseStateHook from '../Hooks/UseStateHook'
import UseEffectHook from '../Hooks/UseEffectHook'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/listsandkeys' element={<ListsandKeys />} />
            <Route path='funcComponent' element={<FuncComp />} />
            <Route path='lifecyclemethods' element={<LifeCycleMethods />} />
            <Route path='pagination' element={<Pagination />} />
            <Route path='contactus' element={<ContactUs />} />
            <Route path='usestatehook' element={<UseStateHook />} />
            <Route path='useeffecthook' element={<UseEffectHook />} />
        </Routes>
    </div>
  )
}

export default Routing