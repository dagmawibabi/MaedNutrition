import "./footer.css";

export const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="footerColumnsContainer">
                <div className="footerColumns">
                    <span className="footerColumnTitle"> About Us </span> <br />
                    <br />
                    <div className="footerColumnElementWithIcon">
                        <img alt="logo" src={require("../assets/icons/muscle.png")} className="footerIcons" />
                        <span className="eachFooterColumnElement"> Our Story </span> <br />
                    </div>
                    <div className="footerColumnElementWithIcon">
                        <img alt="logo" src={require("../assets/icons/fried-rice.png")} className="footerIcons" />
                        <span className="eachFooterColumnElement"> Our Meals </span> <br />
                    </div>
                    <div className="footerColumnElementWithIcon">
                        <img alt="logo" src={require("../assets/icons/instagram-stories.png")} className="footerIcons" />
                        <span className="eachFooterColumnElement"> Our Subscriptions </span> <br />
                    </div>
                    <div className="footerColumnElementWithIcon">
                        <img alt="logo" src={require("../assets/icons/dumbell.png")} className="footerIcons" />
                        <span className="eachFooterColumnElement"> How it works </span> <br />
                    </div>
                </div>
                <div className="footerColumns">
                    <span className="footerColumnTitle"> Contact Us </span> <br />
                    <br />
                    <div className="footerColumnElementWithIcon">
                        <img alt="logo" src={require("../assets/icons/phone-call.png")} className="footerIcons" />
                        <span className="eachFooterColumnElement"> +251940256334 </span> <br />
                    </div>
                    <div className="footerColumnElementWithIcon">
                        <img alt="logo" src={require("../assets/icons/gmail.png")} className="footerIcons" />
                        <span className="eachFooterColumnElement"> meadnutrition@gmail.com </span> <br />
                    </div>
                    <div className="footerColumnElementWithIcon">
                        <img alt="logo" src={require("../assets/icons/placeholder.png")} className="footerIcons" />
                        <span className="eachFooterColumnElement"> Addis Ababa, Ethiopia </span> <br />
                    </div>
                </div>
                <div className="footerColumns">
                    <span className="footerColumnTitle"> Our Socials </span> <br />
                    <br />
                    <div className="footerColumnElementWithIcon">
                        <img alt="logo" src={require("../assets/icons/instagram.png")} className="footerIcons" />
                        <span className="eachFooterColumnElement"> Instagram </span> <br />                    
                    </div>
                    <div className="footerColumnElementWithIcon">
                        <img alt="logo" src={require("../assets/icons/tik-tok.png")} className="footerIcons" />
                        <span className="eachFooterColumnElement"> TikTok </span> <br />                    
                    </div>
                    <div className="footerColumnElementWithIcon">
                        <img alt="logo" src={require("../assets/icons/telegram.png")} className="footerIcons" />
                        <span className="eachFooterColumnElement"> Telegram </span> <br />                    
                    </div>
                </div>
            </div>
            <div style={{height: "50px"}}></div>
            <div className="footerEnd">
                Maed Nutrition &copy; 2022
            </div>
        </div>
    )
}