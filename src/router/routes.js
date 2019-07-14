import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Paperbase from '../paperbase/Paperbase'
import SnackBar from '../SnackBar/SnackBar'

let PrimaryLayout = () => {
  return (
    <div className="container">
      <Paperbase />,
      <SnackBar />
    </div>
  )
}
const Root = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)

export default Root
