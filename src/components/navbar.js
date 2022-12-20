import "./navbar.css";
import vegeDoodles from "../assets/images/b.webp";
import logo from "../assets/icons/logo.jpg";

export const NavBar = () => {
    return (
        <div className="navbarContainer"  style={{backgroundImage: `url(${vegeDoodles})`, backgroundPosition: "center", height: "40px"}}>
        <div className="navbarContainer" style={{opacity: "0.9"}}>
            <div style={{display: "flex"}}>
            <img src={logo} style={{width: "50px", margin: "auto auto", paddingRight: "10px"}} />
            <span className="logo">  <span style={{fontSize: "40px", color: "orangered", margin: "auto auto"}}> ማዕድ </span> </span>
            </div>
            <div>
                <span className="eachNavBarItem"> Who we are </span>
                <span className="eachNavBarItem"> What we serve </span>
                <span className="eachNavBarItem"> How it works </span>
                <span className="eachNavBarItem"> Subscriptions </span>
            </div>
            <div>
                <span className="eachNavBarItem"> Contact Us </span>
                <span className="eachNavBarItem navBarCTA"> Take a quiz </span>
            </div>
        </div>
        </div>
    )
}