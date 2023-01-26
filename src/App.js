import React, { useLayoutEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { AttackOfTheClones } from './View/AttackOfTheClones'
import { EmpireStrikeBack } from './View/EmpireStrikeBack'
import { NewHope } from './View/NewHope'
import { PhantomMenace } from './View/PhantomMenace'
import { ReturnOfJedi } from './View/ReturnOfJedi'
import { RevengeOfTheSith } from './View/RevengeOfTheSith'

export const App = () => {
  useLayoutEffect(() => {
    const url = window.location.href
    const paths = url.split("/")
    const path = paths[3]
    if (path === '') {
      window.location.href = '/a-new-hope'
    }
  }, [])
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/a-new-hope' element={<NewHope />} />
      <Route path='/empire-strikes-back' element={<EmpireStrikeBack />} />
      <Route path='/return-of-the-jedi' element={<ReturnOfJedi />} />
      <Route path='/phantom-menace' element={<PhantomMenace />} />
      <Route path='/attack-of-the-clones' element={<AttackOfTheClones />} />
      <Route path='/revenge-of-the-sith' element={<RevengeOfTheSith />} />
    </Routes>
    </BrowserRouter>
  )
}
