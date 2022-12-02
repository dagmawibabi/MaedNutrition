import "./eachMeal.css";

export const EachMeal = (props) => {
    return (
        <div className="eachMeal">
            <img alt="meal" src={props.mealDetails.image} className="eachMealPic"/>
            <div className="eachFoodDetail">
                <div className="foodAndPrice">
                    <span className="eachMealName"> {props.mealDetails.name} </span> 
                    <span className="eachMealPrice"> {props.mealDetails.price} </span> 
                </div>
                <div className="eachMealCompositionContainer">
                    <div className="eachMealComposition">
                        <span> <b> Energy </b> : {props.mealDetails.energy} </span>
                        <span> <b> Protien </b> : {props.mealDetails.protien} </span>                        
                    </div>
                    <div className="eachMealComposition">
                        <span> <b> Carbs </b> : {props.mealDetails.carbohydrates} </span>
                        <span> <b> Fat </b> : {props.mealDetails.fat} </span>                        
                    </div>
                </div>
            </div>
        </div>
    )
}