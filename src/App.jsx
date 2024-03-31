import { useState } from 'react'
import './App.css'
import Badge from './components/Badge'
import Banner from './components/Banner'
import Card from './components/Card'
import ImageTestimonial from './components/ImageTestimonial'
import Tooltip from './components/Tooltip'
import ToastPopup from './components/ToastPopup'
import { FaCircleArrowDown, FaBoltLightning, FaCloudArrowUp  } from "react-icons/fa6";

function App() {


 
 
  return (
    <>
    <h1 className='component-title'>Badges</h1>
    <div className='badge-container'>
      <Badge 
      text="Badge"
      color="grey"/>
      <Badge 
      text="Badge"
      color="red"/>
      <Badge 
      text="Badge"
      color="yellow"/>
      <Badge 
      text="Badge"
      color="green"/>
      <Badge 
      text="Badge"
      color="blue"/>
      <Badge 
      text="Badge"
      color="indigo"/>
      <Badge 
      text="Badge"
      color="purple"/>
      <Badge 
      text="Badge"
      color="pink"/>
    
    </div>
    <div className='badge-container'> 
      <Badge 
      text="Badge"
      color="grey"
      shape="pill"/>
      <Badge 
      text="Badge"
      color="red"
      shape="pill"/>
      <Badge 
      text="Badge"
      color="yellow"
      shape="pill"/>
      <Badge 
      text="Badge"
      color="green"
      shape="pill"/>
      <Badge 
      text="Badge"
      color="blue"
      shape="pill"/>
      <Badge S
      text="Badge"
      color="indigo"
      shape="pill"/>
      <Badge 
      text="Badge"
      color="purple"
      shape="pill"/>
      <Badge 
      text="Badge"
      color="pink"
      shape="pill"/>
    </div>
    <h1 className='component-title'>Banners</h1>
    <div className='banners-flex'>
      <div className='banner-container'>
        <Banner status="success">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
        </Banner>
        <Banner status="warning">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
        </Banner>
        <Banner status="neutral">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
        </Banner>
        <Banner status="danger">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
        </Banner>
      </div>
      <div className='banner-container'>
        <Banner status="success"/>
        <Banner status="warning"/>
        <Banner status="neutral"/>
        <Banner status="danger"/>
      </div>
    </div>
    <h1 className='component-title'>Cards</h1>
    <div className='card-container'>
      <Card />
      <Card icon={<FaCircleArrowDown/>} title="Easy Deployment">
        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
      </Card>
      <Card icon={<FaBoltLightning />} title="Lightning Speed">
        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
      </Card>
      <Card icon={<FaCloudArrowUp/>} title="Cloud Storage">
        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
      </Card>
    </div>
    <h1 className='component-title'>Testimonials</h1>
    <div className='testimonial-container'>
      <ImageTestimonial />
      <ImageTestimonial 
      image={"https://shorturl.at/iyP17"}
      name="James Smith"
      jobTitle="Ontario, CEO"
      color="#91775c">
        Adept and innovative CEO with over 10 years of experience. 
        Proven track record in driving strategic initiatives,
        fostering a culture of innovation, and achieving significant revenue growth.
      </ImageTestimonial>
    </div>
    <h1 className='component-title tooltips-title'>Tooltips</h1>
    <div className='tooltip-container'>
      <Tooltip 
      body="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
      headerText={"Archive notes"}
      color={"#262626"}>
        <button>Hover over me</button>
      </Tooltip>
      <Tooltip 
      body="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
      headerText={"Archive notes"}
      color={"#1E40AF"}>
        <button>Hover over me</button>
      </Tooltip>
      <Tooltip 
      body="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
      headerText={"Archive notes"}
      color={"#A9229B"}>
        <button>Hover over me</button>
      </Tooltip>
      <Tooltip 
      body="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
      headerText={"Archive notes"}
      color={"#47AA5D"}>
        <button>Hover over me</button>
      </Tooltip>
    </div>
    <h1 className='component-title tooltips-title'>Toasts</h1>
    <div className='toast-container'>
     
      <ToastPopup 
       
       type={"information"}>
         <button >Click Here</button>
      </ToastPopup>
      <ToastPopup 
       
       type={"error"}>
         <button >Click Here</button>
      </ToastPopup>
      <ToastPopup 
       
       type={"warning"}>
         <button >Click Here</button>
      </ToastPopup>
      <ToastPopup 
       
       type={"success"}>
         <button >Click Here</button>
      </ToastPopup>
    </div>
    </>
  )
}

export default App
