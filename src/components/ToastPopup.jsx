import { useState } from "react"
import { FaRegCheckCircle } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { FiXCircle } from "react-icons/fi";




export default function ToastPopup({ children, open, onClose, type }) {

    const [showModal, setShowModal] = useState(false)

    function toggleModal() {
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false)
        }, 3000);
      }

let toastBody;
let icon;
let iconColor;
let titleColor;
let bodyTextColor;
let bgColor;

switch(type) {
 case "success":
    toastBody = "Your work has been saved";
    icon = <FaRegCheckCircle />;
    iconColor = {color: "#34D399"}
    titleColor = {color: "#065F46"}
    bodyTextColor = {color: "#047857"}
    bgColor = {backgroundColor: "#ECFDF5"}
    break;
case "warning":
    toastBody = "A network error was detected";
    icon = <AiOutlineExclamationCircle />;
    iconColor = {color: "#FBBF24"}
    titleColor = {color: "#92400E"}
    bodyTextColor = {color: "#B45309"}
    bgColor = {backgroundColor: "#FFFBEB"}
    break;
case "information":
    toastBody = "Please read updated information";
    icon = <HiOutlineInformationCircle />;
    iconColor = {color: "#60A5FA"}
    titleColor = {color: "#1E40AF"}
    bodyTextColor = {color: "#1C51B9"}
    bgColor = {backgroundColor: "#EFF6FF"}
    break;
case "error":
    toastBody = "Please re-save your work again";
    icon = <FiXCircle />
    iconColor = {color: "#F87171"}
    titleColor = {color: "#92400E"}
    bodyTextColor = {color: "#B45309"}
    bgColor = {backgroundColor: "#FEF2F2"}
    break;
default:
    toastBody = null;
}

let typeTitle;

 if (type) {
   typeTitle =  type.charAt(0).toUpperCase() + type.slice(1);
 } else {
    typeTitle = ""
 }


 return (
 <>
 {<div className="toast-button-wrapper" onClick={toggleModal}>{children}</div>}

    { showModal && <div  className={`toast-styles toast-${type}`} style={bgColor}>
        <div className="toast-content">
            {<div className="toast-icon" style={iconColor}>{icon}</div>}
            <div className="toast-text-wrapper">
                <h1  style={titleColor} className="toast-title">{typeTitle}</h1>
                <p style={bodyTextColor}>{ toastBody}</p>
            </div>
        </div>
    </div>
    }
    
 </>
 )
    
}