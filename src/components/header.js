import "./header.css";
import people1 from "../assets/images/people/1.JPG";
import people2 from "../assets/images/people/2.JPG";
import people3 from "../assets/images/people/3.JPG";
import people4 from "../assets/images/people/4.JPG";
import food1 from "../assets/images/food/1.png";
import food2 from "../assets/images/food/2.png";
import food3 from "../assets/images/food/3.png";
import food4 from "../assets/images/food/4.png";
import header1 from "../assets/images/header/1.png";
import header2 from "../assets/images/header/2.png";
import header3 from "../assets/images/header/3.png";
// import header4 from "../assets/images/header/4.png";

import { useState } from "react";
import { useEffect } from "react";

export const Header = () => {
    // Carousel
    let headerImage = [header1, header2, header3];
    let foodImages = [food1, food2, food3, food4];
    let peopleImages = [people1, people2, people3, people4];
    const [curHeaderImage, setCurHeaderImage] = useState(1);    
    function changeHeadImage(){
        let a = curHeaderImage;
        a++;
        if(a > peopleImages.length - 1){
            a = 0;
        }
        setCurHeaderImage(a);
    }
    useEffect(()=>{
        setTimeout(changeHeadImage, 4000);
    }, [curHeaderImage]);

    return (
        // style={{backgroundImage: `url(${food1})`}}
        <div className="test" > 
            <div className="headerContainer" style={{backgroundImage: `url(${headerImage[curHeaderImage]})`}} >
                <div className="headerImagesContainer"> 
                    {/* <img className="headerImages" src={peopleImages[curHeaderImage]} alt="athlete" /> */}
                    <img className="headerImages" src={peopleImages[0]} alt="athlete" />
                    <img className="headerImages" src={foodImages[0]} alt="athlete" />
                    <img className="headerImages" src={foodImages[1]} alt="athlete" />
                    <img className="headerImages" src={foodImages[2]} alt="athlete" />
                    <img className="headerImages" src={peopleImages[3]} alt="athlete" />
                </div>
            </div>
            <div className="headerDescription"> 
                    <div className="mottoAndTagline">
                        <span className="motto">
                            Eat Like You Train!
                        </span> 
                        <p className="tagline"> Get into the best shape of your life with delicious, science-backed meals designed for results. </p>
                    </div>
                    <div className="headerBtns">
                        <span className="headerCTA"> Take a quiz </span>
                        <span className="headerSecondaryBtn"> Checkout Meals </span>
                    </div>
                </div>
        </div>
    )
}