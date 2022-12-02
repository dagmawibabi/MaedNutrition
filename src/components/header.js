import "./header.css";
import people1 from "../assets/images/people/1.JPG";
import people2 from "../assets/images/people/2.JPG";
import people3 from "../assets/images/people/3.JPG";
import people4 from "../assets/images/people/4.JPG";
// import food1 from "../assets/images/food/1.png";
import { useState } from "react";
import { useEffect } from "react";

export const Header = () => {
    // Carousel
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
        <div className="test"  > 
            <div className="headerContainer">
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
                <div className="headerImagesContainer"> 
                    <img className="headerImages" src={peopleImages[curHeaderImage]} alt="athlete" />
                </div>
            </div>
        </div>
    )
}