import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../context/MainProvider'
import { WishListContext } from '../context/WishListProvider'

function Navbar() {
   const {basket} = useContext(MainContext)
   const {wishList} = useContext(WishListContext)
  return (
 <>
   <Link to={"/"}>HomePage</Link>
   <Link to={"/admin"}>AdminPage</Link>
   <Link to={"/add"}>AddEmployee</Link>
   <Link to={"/basket"}>Basket {basket.length}</Link>
   <Link to={"/wishList"}>WishList {wishList.length}</Link>
 </>
  )
}

export default Navbar