import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../context/MainProvider'

function Navbar() {
   const {basket} = useContext(MainContext)
  return (
 <>
   <Link to={"/"}>HomePage</Link>
   <Link to={"/admin"}>AdminPage</Link>
   <Link to={"/add"}>AddEmployee</Link>
   <Link to={"/basket"}>Basket {basket.length}</Link>
 </>
  )
}

export default Navbar