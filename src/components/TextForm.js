import React,{useState} from 'react'


export default function TextForm(props) {
  const handleOnChange=(event)=>{
    setText(event.target.value)

  }
  const handleUpClick=()=>{
    let newText= text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase","success")
  }
  const handleloClick=()=>{
    let newText= text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase","success")
  }
  const handleClear=()=>{
    let newText= " "
    setText(newText)
    props.showAlert("Text cleared","success")
  }
  

  
  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text copied!","success")
}
  const HandleSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed extra spaces","success")
  }

 
  const [text,setText] = useState("Enter text here...");
    
  return (
    <>
    <div className='container'style={{color:props.mode==="dark"?"white":"#042743"}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
        
        <textarea className="form-control" id="myBox" rows="5" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"grey":"white"}}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleloClick}>LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={HandleSpace}>Remove Extra Spaces</button>
         


      </div>
      <div className="container my-4"style={{color:props.mode==="dark"?"white":"#042743"}}>
        <h1> Your text summary</h1>
        <p>{text.trim()===""?0:text.trim().split(" ").length} words and {text.trim().replace(" ","").length} characters</p>
        <p>{0.008*text.trim().split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here. "}</p>

      </div>
      </>
  )
}
