import { EachMeal } from "./eachMeal"
import "./meals.css";

export const Meals = () => {
    let listOfMeals = [
        {
            "image": require("../assets/images/food/1.png"),
            "name": "Chicken and Rice",
            "price": "$123",
            "energy": "414kcal",
            "protien": "36gram",
            "carbohydrates": "30gram",
            "fat": "15gram",
        },
        {
            "image": require("../assets/images/food/2.png"),
            "name": "Chicken and Rice",
            "price": "$123",
            "energy": "414kcal",
            "protien": "36gram",
            "carbohydrates": "30gram",
            "fat": "15gram",
        },
        {
            "image": require("../assets/images/food/3.png"),
            "name": "Chicken and Rice",
            "price": "$123",
            "energy": "414kcal",
            "protien": "36gram",
            "carbohydrates": "30gram",
            "fat": "15gram",
        },
        {
            "image": require("../assets/images/food/4.png"),
            "name": "Chicken and Rice",
            "price": "$123",
            "energy": "414kcal",
            "protien": "36gram",
            "carbohydrates": "30gram",
            "fat": "15gram",
        },
    ];
    return (
        <div className="mealsContainer">
            <div style={{height: "40px"}}></div>
            <div>
                <span className="sectionTitle"> What We Serve </span>
                <br />
                <br />
                <span className="sectionDescription"> Get into the best shape of your life with delicious, science-backed meals designed for results. </span>
            </div>
            <div style={{height: "50px"}}></div>
            <div className="eachMealContainer gridView">
                <EachMeal mealDetails={listOfMeals[0]}/>
                <EachMeal mealDetails={listOfMeals[1]}/>
                <EachMeal mealDetails={listOfMeals[2]}/>
                <EachMeal mealDetails={listOfMeals[3]}/>
                <EachMeal mealDetails={listOfMeals[0]}/>
                <EachMeal mealDetails={listOfMeals[1]}/>
                <EachMeal mealDetails={listOfMeals[2]}/>
                <EachMeal mealDetails={listOfMeals[3]}/>
            </div>
        </div>
    )
}