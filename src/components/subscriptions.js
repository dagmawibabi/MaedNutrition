import { EachSubscription } from "./eachSubscription";
import "./subscriptions.css"

export const Subscriptions = () => {
    let subscriptions = [
        {
            "name": "Package One",
            "title": "One Meal", 
            "price": "234 Birr",
            "description": "If you're looking to improve your health with delicious Mediterranean food, this is the plan for you.",
            "icon": require("../assets/icons/checkmark.png"),
            "includes": [
                "Calorie & Portion Controlled",
                "Nutritionally Balanced",
                "Made With Organic Ingredients",
            ]
        },
        {
            "name": "Package Three",
            "title": "Three Meals", 
            "price": "456 Birr",
            "description": "If you're looking to improve your health with delicious Mediterranean food, this is the plan for you.",
            "icon": require("../assets/icons/checkmark.png"),
            "includes": [
                "Delivered Weekly to Your Door",
                "Calorie & Portion Controlled",
                "Nutritionally Balanced",
                "Made With Organic Ingredients",
                "With a Diet Planner & Calorie Counter"
            ]
        },
        {
            "name": "Package Two",
            "title": "Two Meals", 
            "price": "345 Birr",
            "description": "If you're looking to improve your health with delicious Mediterranean food, this is the plan for you.",
            "icon": require("../assets/icons/checkmark.png"),
            "includes": [
                "Delivered Weekly to Your Door",
                "Calorie & Portion Controlled",
                "Nutritionally Balanced",
                "Made With Organic Ingredients",
            ]
        },
    ];
    return (
        <div className="subscriptionsContainer"> 
            <div style={{height: "40px"}}></div>
            <div>
                <span className="sectionTitle"> Subscriptions </span>
                <br />
                <br />
                <span className="sectionDescription"> With a Maed subscription, it's like getting a personal chef and dietitian all in one. </span>
                <div className="eachSubscription">
                    <EachSubscription subscription={subscriptions[0]} recommended={false}/>
                    <EachSubscription subscription={subscriptions[1]} recommended={true}/>
                    <EachSubscription subscription={subscriptions[2]} recommended={false}/>
                </div>
            </div>
        </div>
    )
}