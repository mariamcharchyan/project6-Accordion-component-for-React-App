


import {useState} from 'react';

function Accardion({item}){

    const [text, setText] = useState(false);

    const handleClick  = () => {
        setText(!text)
    }

    return(
        <div className="item" >
            <div className="title" onClick={handleClick}>
              <h3>{item.name}</h3>
              <p>{text === false ? "+" : "-"}</p>
            </div>
            <div className="content show">
                {text && item.capital}
            </div>
        </div>
    )
}

export default Accardion;