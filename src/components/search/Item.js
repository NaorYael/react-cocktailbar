import React from 'react'

const Item = ({item}) => {
    return (
        <div className="list-item">
               <div>{item.strDrink}</div>
               <div>
                   <img 
                   style={{hight: '40px', width: '40px'}}
                   src={item.strDrinkThumb}
                   alt={item.strDrink}
                   />
               </div>
        </div>
    )
}

export default Item
