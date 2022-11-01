import './SectionOne.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function SectionOne(){

    let box=document.querySelector('.imagecards')

    const buttonprev=()=>{
        let width=box.clientWidth;
        box.scrollLeft=box.scrollLeft-width;
    }

    const buttonnext=()=>{
        let width=box.clientWidth;
        box.scrollLeft=box.scrollLeft+width;
    }

    return (
        <>
            <div className="head1">
                <h1>New This Week</h1>
                <div className="cardslider">
                    <button className="rightcard1" onClick={buttonprev}>
                        <FiChevronLeft />
                    </button>
                    <button className="leftcard1" onClick={buttonnext}>
                        <FiChevronRight />
                    </button>
        </div>
        </div>
            <div className="images">
                <div className="imagecards">
                    <div className='image1'><h5>Collection</h5><h2 className='cardtext'>Most popular <br></br>around the world</h2>
                        <div className="imagdiv1">
                            <a className="imagecard" href="https://www.airbnb.co.in/s/experiences?refinement_paths%5B%5D=%2Fexperiences%2Fsection%2FEXPERIENCES_TOP_BOOKED_ONLINE_GROUPING%3ATOP_BOOKED&search_type=section_navigation">Show all</a>
                        </div>
                    </div>
                    <div className="image2"><h5>Collection</h5><h2 className='cardtext'>Great for team <br></br> building</h2>
                        <div className="imagdiv2"><a className="imagecard" href="https://www.airbnb.co.in/s/experiences?refinement_paths%5B%5D=%2Fexperiences%2FKG%2FTag%3A8059&search_type=section_navigation">Show all</a>
                        </div>
                    </div>
                    <div className="image3"><h5>Collection</h5><h2 className='cardtext'>Fun for the family</h2>
                        <div className="imagdiv3"><a className="imagecard" href="https://www.airbnb.co.in/s/experiences?refinement_paths%5B%5D=%2Fexperiences%2Fsection%2FEXPERIENCES_SELECTED_TAGS_GROUPING%3AFAMILIES&search_type=section_navigation">Show all</a>
                        </div>
                    </div>
            </div>
        </div>



        </>
    )
}

export default SectionOne;
