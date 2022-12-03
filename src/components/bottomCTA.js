import "./bottomCTA.css";

export const BottomCTA = () => {
    return (
        <div className="bottomCTAContainer">
            <span className="sectionTitle"> What Are You Waiting For? </span>
            <p className="sectionDescription"> Maed delivers everywhere in Addis Ababa with any of the packages you've purchased.</p>
            <div className="bottomCTAs">
                <div className="eachBottomCTA primaryBottomCTA">
                    <span> Shop Meal Plans </span>
                </div>
                <div className="eachBottomCTA">
                    <span> Take The Quiz </span>
                </div>
            </div>
        </div>
    )
}