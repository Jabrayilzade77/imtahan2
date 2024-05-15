import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../context/MainProvider'

function HomePage() {

    const [products, setProducts] = useState([])
    const {addBasket} = useContext(MainContext)

    useEffect(() => {
        getAllProducts()
    }, [])


    async function getAllProducts() {

        const res = await fetch("http://localhost:3000/myapp/")
        const data =await res.json()
        setProducts(data)
    }
    
  return (
    <>
    <div style={{display:"flex",flexWrap:"wrap"}}>
    {products.map(x=>(
        <div key={x._id} style={{border:"1px solid black",padding:"10px",margin:"10px"}}>
            <div className="title">{x.title}</div>
            <div className="price">{x.price}</div>
            <button onClick={()=>addBasket(x)}>add basket</button>
        </div>
    ))}
    </div>
    </>
  )
}

export default HomePage