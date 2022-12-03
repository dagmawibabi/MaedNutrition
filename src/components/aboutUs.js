import "./aboutUs.css";

import { useState } from "react";
import { useEffect } from "react";

export const AboutUs = () => {
    const [curHeaderImage, setCurHeaderImage] = useState(6);    
    function changeHeadImage(){
        let a = curHeaderImage;
        a++;
        if(a > 7){
            a = 5;
        }
        setCurHeaderImage(a);
    }
    useEffect(()=>{
        setTimeout(changeHeadImage, 4000);
    }, [curHeaderImage]);
    return (
        <div className="aboutUsContainer"> 
            <span className="sectionTitle"> Who we are </span>
            <p className="sectionDescription"> Trusted by top athletes, transforming lives nationwide. </p>
            <div className="personCard">
                <img alt="person" src={require(`../assets/images/people/${curHeaderImage}.png`)} className="person" />
                <div className="personDescription">
                    <div className="personDetails">
                        <span className="personPosition"> Founder & CEO </span> <br />
                        <span className="personName"> Sofonias Nebiyu </span> <br />
                        <span className="personTask"> Body Builder </span> <br />
                    </div>
                    <div className="quotePart">
                        <img alt="icon" src={require("../assets/icons/quote.png")} className="quoteIcon" />
                        <div style={{width: "20px"}}></div> 
                        <p className="personQuote"> You're only one decision away from an entirely different life. Real People. Real Transformations. Maed fuels the top athletes and fitness professionals in the game. </p>
                        <div style={{width: "20px"}}></div> 
                        <img alt="icon" src={require("../assets/icons/quote.png")} className="quoteIcon" />
                    </div>
                </div>
            </div>
        </div>
    )
}