import { FaCheckCircle, FaInfoCircle  } from "react-icons/fa";
import { FaTriangleExclamation, FaCircleXmark } from "react-icons/fa6";




export default function Banner({ children, status }) {

   let statusTitle;
   let icon;

   switch(status) {
      case "success":
         statusTitle = "Congratulations!";
         icon = <FaCheckCircle className="success-icon"/>;
         break;
      case "warning":
         statusTitle = "Attention";
         icon = <FaTriangleExclamation className="warning-icon"/>;
         break;
      case "danger":
         statusTitle = "There is a problem with your application";
         icon = <FaCircleXmark className="danger-icon" />;
         break;
      case "neutral":
         statusTitle = "Update available";
         icon = <FaInfoCircle className="neutral-icon"/>;
         break;

   }

 return (
 
 <div className="banner-wrapper">
      
      <div className={`banner banner-${status}`}>
      {icon}
         <div className="banner-body">
            <h1 className="banner-title">{statusTitle}</h1>
            {children} 
         </div>
         
         
      </div>
   </div>
 )
}