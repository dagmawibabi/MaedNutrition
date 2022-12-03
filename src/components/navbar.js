import "./navbar.css";

export const NavBar = () => {
    return (
        <div className="navbarContainer">
            <span className="logo"> Maed Nutrition</span>
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
    )
}