import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './SectionTwo.css';

function SectionTwo() {

    let box=document.querySelector('.many-cards-scroll-div')

    const buttonpre=()=>{
        let width=box.clientWidth;
        box.scrollLeft=box.scrollLeft-width;
    }

    const buttonnex=()=>{
        let width=box.clientWidth;
        box.scrollLeft=box.scrollLeft+width;
    }

    return (

        <>
            <div className="main-div-card-section">
                <div className="header-div-card-section">
                    <h2>Plan a trip with help from local Hosts around the world</h2>
                    <div className="buttons-div-card-section onhover">
                        <button className='left-arrow-div onhover' onClick={buttonpre}>
                            <FiChevronLeft />
                        </button>
                        <button className='right-arrow-div onhover' onClick={buttonnex}>
                            <FiChevronRight />
                        </button>
                    </div>
                </div>
            </div>

            <div className="many-cards-scroll-div">
                <div className="single-card-div" style={{ backgroundImage: "url('https://a0.muscache.com/im/pictures/lombard/MtTemplate-2496585-poster/original/e6de8fae-018d-4411-b0a3-81bbb6e4e5c3.jpeg?im_w=320')" }}>

                </div>
                <div className="single-card-div" style={{ backgroundImage: "url('https://a0.muscache.com/im/pictures/lombard/MtTemplate-2488061-active_media/original/2d2c8d93-f9fc-48c3-975a-84fec4fb951c.jpeg?im_w=320')" }}>

                </div>
                <div className="single-card-div" style={{ backgroundImage: "url('https://a0.muscache.com/im/pictures/lombard/MtTemplate-2563542-poster/original/391d04f5-6823-4a9b-a7e4-c86968325e7c.jpeg?im_w=320')" }}>

                </div>
                <div className="single-card-div" style={{ backgroundImage: "url('https://a0.muscache.com/im/pictures/lombard/MtTemplate-3010357-poster/original/6cdd0bd4-eac2-4657-ab1f-a429ebdafe37.jpeg?im_w=320')" }}>

                </div>
                <div className="single-card-div" style={{ backgroundImage: "url('https://a0.muscache.com/im/pictures/lombard/MtTemplate-3134396-active_media/original/e4f5bfb7-d45e-477b-a49f-e1bd7f85bcf0.jpg?im_w=320')" }}>

                </div>
                <div className="single-card-div" style={{ backgroundImage: "url('https://a0.muscache.com/im/pictures/lombard/MtTemplate-2596268-active_media/original/b0aa65da-e3f6-4bd2-91d3-9e2f127f348a.jpg?im_w=320')" }}>

                </div>
                <div className="single-card-div" style={{ backgroundImage: "url('https://a0.muscache.com/im/pictures/lombard/MtTemplate-2493134-poster/original/235ca0ba-93c9-4e39-a41e-9013bc13142e.jpeg?im_w=320')" }}>

                </div>
                <div className="single-card-div" style={{ backgroundImage: "url('https://a0.muscache.com/im/pictures/lombard/MtTemplate-2493583-media_library/original/230e98c2-f628-4a67-94b6-dcac3e94d2eb.jpeg?im_w=320')" }}>

                </div>
                <div className="single-card-div" style={{ backgroundImage: "url('https://a0.muscache.com/im/pictures/lombard/MtTemplate-3076506-active_media/original/1ea49a82-f447-40bc-8324-2d85a748b17e.jpg?im_w=320')" }}>

                </div>
                {/* <div className="single-card-div" style={{ backgroundImage: "url('https://a0.muscache.com/im/pictures/lombard/MtTemplate-2488061-active_media/original/2d2c8d93-f9fc-48c3-975a-84fec4fb951c.jpeg?im_w=320')" }}>

                </div>
                <div className="single-card-div" style={{ backgroundImage: "url('')" }}>

                </div> */}
                <div className="single-card-div">

                </div>

            </div>
        </>
    )
}

export default SectionTwo;
