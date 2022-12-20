import "./aboutUs.css";
import people1 from "../assets/images/people/1.JPG";
import people2 from "../assets/images/people/2.JPG";
import people3 from "../assets/images/people/3.JPG";
import people4 from "../assets/images/people/4.JPG";
import { useState } from "react";
import { useEffect } from "react";

export const AboutUs = () => {
    let peopleImages = [people1, people2, people3, people4, people1, people2, people3, people4, ];
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
        <div className="aboutUsContainer" > 
            <div className="personCard" style={{display: "block"}}>
                <div style={{marginBottom: "60px", margin: "auto auto", textAlign: "center"}}>
                    <span className="sectionTitle"> Who we are </span>
                    <p className="sectionDescription"> Trusted by top athletes, transforming lives nationwide. </p>
                </div>
                <div className="personCardDetails" style={{display: "flex"}}>
                    <img alt="person" src={require(`../assets/images/people/${curHeaderImage}.png`)} className="person" />
                    <div className="personDescription">
                        <div className="personDetails">
                            {/* <span className="personPosition"> Founder & CEO </span> <br /> */}
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
        </div>
    )
}