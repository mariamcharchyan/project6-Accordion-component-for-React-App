import {useState} from 'react';

function Accardion2({item,i,handleClick2,activeIndex}){
    


    return(
        <div className="item">
            <div className="title" onClick={() => handleClick2(i)}>
                <h3>{item.name}</h3>
                <p>{activeIndex === i ? "-" : "+"}</p>
            </div>
            <div className= "content">
              {activeIndex === i ? item.capital : null}
            </div>
        </div>
    )
}

export default Accardion2;