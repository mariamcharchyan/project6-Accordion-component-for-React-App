import { useParams} from "react-router-dom";
import {useState, useEffect} from 'react';
import Accardion from './Accardion';
import Accardion2 from './Accardion2';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Accardions() {
    //for pagination
    const {page} = useParams();

    const [pages, setPages] = useState(0);

    const limit = 4;
    const offset = (page-1)*limit;

    
    function getPaginationButtons(currentPage, totalPages) {
        const maxButtonsToShow = 5;
        const pageDiff = Math.floor((maxButtonsToShow - 1) / 2);
        const firstPage = Math.max(1, currentPage - pageDiff);
        const lastPage = Math.min(totalPages, firstPage + maxButtonsToShow - 1);
      
        const paginationButtons = [];
        if (firstPage > 1) {
          paginationButtons.push('...');
        }
        for (let i = firstPage; i <= lastPage; i++) {
          paginationButtons.push(i);
        }
        if (lastPage < totalPages) {
          paginationButtons.push('...');
        }
        // window.location.href = `/countries/${currentPage}`;
        return paginationButtons;
      }

    let paginationButtons = getPaginationButtons(page, pages);

    const handleClickButton = (pageNumber) => {
        window.location.href = `/countries/${pageNumber}`;
        paginationButtons = getPaginationButtons(pageNumber, pages);
    }
   
    //for  data
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3004/countries?limit=${limit}&offset=${offset}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data.countries);
                setPages(Math.ceil(data.count / limit));
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [limit, offset]);

    //for Accardion2
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick2 = (i) => {
        if (activeIndex === i) {
            return setActiveIndex(null)
        }
        setActiveIndex(i)
    }
  
    return (
        <div className="wrapper">
        <h2>Accordion component for React App(hooks)</h2>
            <div className="accardion">
                <div className="accardion1">
                    <h2>Accardion1</h2>
                    {data.map((item,i) => (
                        <Accardion item={item} key={i}/>
                    ))}
                </div>
                <div className="accardion2">
                    <h2>Accardion2</h2>
                    {data.map((item, i) => (
                        <Accardion2 item={item} i={i} handleClick2={handleClick2} activeIndex={activeIndex} key={i}/>
                    ))}
                </div>
            </div>
            <div className="buttons-container">
                
            {paginationButtons.map((pageNumber, index) => {
                return (
                    <div key={index} className={typeof pageNumber === 'number' ? "buttons" : "noButton"}>
                        <button onClick={() => handleClickButton(pageNumber)}>
                            {pageNumber}
                        </button>
                    </div>
                );
            })}
                
            </div>
        </div>
    );
    }

export default Accardions;


