import { useState } from "react"
import { IoClose } from "react-icons/io5";
import { RiInboxLine } from "react-icons/ri";




export default function Tooltip({ children, body, headerText, color, icon}) {

    const [isVisible, setIsVisible] = useState(false);

    const colorStyle = {
        backgroundColor: color
    }

    const arrowColor = {
        borderTop: `10px solid ${color}`

    }

    return <div className="tooltip-wrapper"
    onMouseEnter={() => setIsVisible(true)}>
        
        {children}
        {isVisible && <div className="tooltip" style={colorStyle} >
            <button className="tooltip-close-btn"
            onClick={() => setIsVisible(false)}><IoClose/></button>
            {<div className="tooltip-body"  >
                {icon ? icon : <RiInboxLine />}
                <div className="tooltip-text">
                    <div className="tooltip-headerText" >{headerText}</div>
                    <div className="tooltip-bodyText">{body}</div>
                </div>
            </div>}
            <div class="arrow-down" style={arrowColor}></div>
            </div>}
    </div>
}