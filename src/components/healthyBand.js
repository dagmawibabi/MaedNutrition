import "./healthyBand.css";

export const HealthyBand = () => {
    let healthBand = [
        {
            "title": "Gluten Free",
            "icon": require("../assets/icons/gluten-free.png"),
        },
        {
            "title": "Organic Product",
            "icon": require("../assets/icons/natural-product.png"),
        },
        {
            "title": "Low Fat",
            "icon": require("../assets/icons/low.png"),
        },
        {
            "title": "Low Sugar",
            "icon": require("../assets/icons/sugar-free.png"),
        },
        {
            "title": "High Fiber",
            "icon": require("../assets/icons/nanofiber.png"),
        },
    ];
    return (
        <div className="healthyBandContainer">
            <span className="sectionTitle"> How It Works </span> <br /> <br /> 
            {/* <span className="healthBandTitle"> You're only one decision away from an entirely different life </span> */}
            <p className="healthBandDescription">
                Maed has helped thousands of customers and top athletes lose weight, gain muscle, and improve their healty by Picking Your Meal Plan.  
            </p>
            <div className="eachHealthyBandContainer">
                {
                    healthBand.map((index, value) => {
                        return (
                            <div className="eachHealthBandElement">
                                <img alt="icon" src={healthBand[value]["icon"]} className="healthBandIcon" />
                                <span className="eachHealthBandTitle" > {healthBand[value]["title"]} </span>
                            </div>
                        )
                    })
                }
            </div> 
        </div>
    )
}