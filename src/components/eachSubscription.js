import "./eachSubscription.css"

export const EachSubscription = (props) => {

    return(
        <div className={props.recommended ? "eachSubscriptionContainer recommendedSub" : "eachSubscriptionContainer"}>
            <div className="subscriptionHeader">
                {/* <span> {props.subscription.name} </span> */}
                <div className={props.recommended ? "recommended" : ""} >
                    <span className={props.recommended ? "subTitle recommendedIndicatorTitle" : "subTitle"}> {props.subscription.title} </span>
                    <div style={props.recommended ? {display: "block"} : {display: "none"}}>
                        <span className="recommendedIndicator"> Recommended</span> 
                    </div>
                </div>
                <div className="subPricePerDay">
                    <span className="subPrice"> {props.subscription.price} </span>
                    <div style={{width: "10px"}}></div>
                    <span className="subRate"> /day </span>
                </div>
                <span className="subDescription"> {props.subscription.description} </span>
            </div>
            <hr />
            <div className="eachSubscriptionIncludes">
                {props.subscription.includes.map((index, value)=>{
                    return (
                        <div className="eachSubWithIcon">
                            <img alt="icon" src={props.subscription.icon} className="subIcon" />
                            <span className="eachSubEachInclude"> {props.subscription.includes[value]} </span>
                        </div>
                    );
                })}
            </div>
            <div className={props.recommended ? "subscriptionCTA recommendedSubscriptionCTA" : "subscriptionCTA"}>
                <span> Get Started </span>
            </div>
        </div>
    )
}