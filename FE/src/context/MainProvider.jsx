import React, { createContext, useState } from 'react'

export const MainContext = createContext()


function MainProvider({children}) {
    const [basket, setBasket] = useState([])

    function addBasket(item) {
        const index = basket.findIndex(x=>x._id === item._id)
        const element = basket[index]

        if(index != -1){

           element.count++
           setBasket([...basket])
        }
        else{
            setBasket([...basket,{...item,count:1}])
        }
    }

  return (
    <MainContext.Provider value={{basket,addBasket}}>
    {children}
    </MainContext.Provider>
  )
}

export default MainProvider