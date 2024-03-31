




export default function Badge({ color, text, shape}) {
    const style = {}

    switch(color) {
        case "gray":
            style.backgroundColor = "#F3F4F6";
            style.color = "#1F2937";
            break;
        case "red":
            style.backgroundColor = "#FEE2E2";
            style.color = "#991B1B";
            break;
        case "yellow":
            style.backgroundColor = "#FEF3C7";
            style.color = "#92400E";
            break;
        case "green":
            style.backgroundColor = "#D1FAE5";
            style.color = "#065F46";
            break;
        case "blue":
            style.backgroundColor = "#DBEAFE";
            style.color = "#1E40AF";
            break;
        case "indigo":
            style.backgroundColor = "#E0E7FF";
            style.color = "#3730A3";
            break;
        case "purple":
            style.backgroundColor = "#EDE9FE";
            style.color = "#5B21B6";
            break;
        case "pink":
            style.backgroundColor = "#FCE7F3";
            style.color = "#9D174D";
            break;
        default:
            style.backgroundColor = "#F3F4F6";
            style.color = "#1F2937";   
            
        
    }
    let shapeClass = ""
    if (shape === "pill") shapeClass = "badge-pill"
    return (
        <div style={style} className={`badge ${shapeClass}`}>{text}</div>
    )

}