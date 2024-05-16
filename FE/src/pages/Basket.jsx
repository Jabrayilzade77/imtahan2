import React, { useContext } from 'react'
import { MainContext } from '../context/MainProvider'

function Basket() {

  const {basket,addBasket,decBasket,removeBasket,getTotal} = useContext(MainContext)
  return (

   <>
    <div style={{display:"flex",flexWrap:"wrap"}}>
    {basket.map(x=>(
      <div key={x._id} style={{border:"1px solid black",padding:"10px",margin:"10px"}}>
            <div className="title">{x.title}</div>
            <div className="price">{x.price} $</div>
            <div>{x.count}</div>
            <button onClick={()=>addBasket(x)}>+</button>
            <button onClick={()=>decBasket(x)}>-</button>
            <button onClick={()=>removeBasket(x)}>X</button>
        </div>
    ))}
    </div>
    <div className="total">Total : {getTotal()} $</div>
   </>
  )
}

export default Basket