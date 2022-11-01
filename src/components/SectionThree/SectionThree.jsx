import Data from '../../data';
import './SectionThree.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function SectionThree(){
    let box2=document.querySelector('.main-card')

    const buttonprev2=()=>{
        let width2=box2.clientWidth;
        box2.scrollLeft=box2.scrollLeft-width2;
    }

    const buttonnext2=()=>{
        let width2=box2.clientWidth;
        box2.scrollLeft=box2.scrollLeft+width2;
    }
    return(
        <>
        <div className="head3">
                <h2>Top sellers</h2>
                <div className="cardslider">
                    <button className="leftcard3 onhover" onClick={buttonprev2}>
                        <FiChevronLeft />
                    </button>
                    <button className="rightcard3 onhover" onClick={buttonnext2}>
                        <FiChevronRight />
                    </button>
                </div>
        </div>

        <div className="main-card">
        {Data.map((data, index) => {
            return (
                <div key={index} className='card' type="none">
                    <img className="posterimage" src={data.image} alt="imageposter" ></img>
                    <p className="line1">*{data.rating} ({data.users}) {data.location}</p>
                    <p className="line2">{data.name} </p>
                    <p className="line3"><b>From {data.price}</b>/person</p>

                </div>

            )
        })}
        </div>

        </>
    )

}
export default SectionThree;
