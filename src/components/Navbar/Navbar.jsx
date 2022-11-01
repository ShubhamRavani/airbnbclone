import './Navbar.css';
import User from "../../image/user.png"

function Navbar(){

    return (
        <>
        <div className="head">
            <a href='https://www.airbnb.co.in/'><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png" alt="logo" ></img></a>
            <a href='https://www.airbnb.co.in/host/homes' className='homelink'><p className='home'>Become a host</p></a>
            <img className="language" src="https://i.pinimg.com/736x/b2/4a/16/b24a16226a41ebbbca826868cc4d8eec.jpg" alt="language"></img>
            <button className="userbutton"><img className='userlogo' src={User} alt="userinterface" ></img></button>
        </div>
        <hr></hr>
        </>
    )
}

export default Navbar
