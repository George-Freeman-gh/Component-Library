import { CiCoffeeCup } from "react-icons/ci";



export default function Card({ children, title, icon, color}) {


    return(
        <div className="card-wrapper">
            <div className="card-icon" style={{backgroundColor: color ? color: "#3F75FE"}}>{icon ? icon : <CiCoffeeCup/>}</div>
            <div className="card-body">
                <h1>{title ? title : "Input Title"}</h1>
                <p>{children ? children : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum nisl ut nulla tempor,
                 a efficitur libero aliquam.`}</p>
            </div>
        </div>
    )
    
}