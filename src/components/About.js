import React from 'react'
import { useState } from 'react'


export default function About() {
  const [myStyle,SetMyStyle]=useState(
    {
        color:'white',
        backgroundColor:"black",
        borderRadius:"1px solid black"

    })
    const [Btntext,setBtntext] = useState("Enable Dark Mode")
    const toogleStyle=()=>{
     if(myStyle.color==="white"){
      SetMyStyle({
        color:'black',
        backgroundColor:"white",
        borderRadius:"1px solid white"

    })
    setBtntext("Enable Dark Mode")
     }
     else{
      SetMyStyle({
        color:'white',
        backgroundColor:"black",
        borderRadius:5
        
    })
    setBtntext("Enable Light Mode")
     }
    }
  return (
    <div classNameName="container " style={myStyle}>
        <h1 className="my-3 mx-3">About Us</h1>
    <div>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item mx-3">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to Style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item mx-3">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle}data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to Style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item mx-3">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle}data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to Style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
      
    </div>
    <div className="container my-2 mx-2" >
    <button onClick={toogleStyle} type="button" class="btn btn-primary my-2">{Btntext}</button>
    </div>
    </div>
  )
}
