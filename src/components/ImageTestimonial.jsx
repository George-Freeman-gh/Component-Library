import { RiDoubleQuotesL } from "react-icons/ri";



export default function ImageTestimonial({ children, image, color, jobTitle, icon, name }) {

    const defaultText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit."

    return (
        <div className="testimonial-wrapper">
            <img className="testimonial-image" src={image ? image : "placeholder.jpg"} />
            <div className="testimonial-background" style={{backgroundColor: color ? color: "#2545B8"}}>
                <div className="testimonial-body-elements">
                { icon ? icon : <RiDoubleQuotesL /> }
                <p className="testimonial-body-text">{children ? children : defaultText}</p>
                <div className="testimonial-body-credentials">
                    <h5>{name ? name : "May Andersons"}</h5>
                    <h6>{jobTitle ? jobTitle : "Workcation, CTO"}</h6>

                </div>

                </div>

            </div>

        </div>
    )
}


