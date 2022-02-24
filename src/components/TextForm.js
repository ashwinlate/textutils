import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
    }
    const handleLoClick = () => {
        //console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase", "success")
    }
    {
    }
    const handleClearClick = () => {
        //console.log("Uppercase was clicked" + text);
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared", "success")
    }
    const handleCopyClick = () => {
        //console.log("Uppercase was clicked" + text);
        // text.toCopyText();
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied!", "success")
    }
    const handleOnChange = (event) => {
        //console.log("On change");
        setText(event.target.value)
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove Extra Spaces", "success")
    }

    const [text, setText] = useState(" ")
    return (
      <>
       <div className="container">
                <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                    <h1 style={{color:`${props.mode === 'light' ? '#000000' : 'white'} `}}>{props.heading}</h1>
                    <div className="mb-3">
                        {/* <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea> */}
                        <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: 'white', color: 'black' }} id="myBox" rows="8"></textarea>
                    </div>
                    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                    <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
                    <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                </div>
                <div className="container my-3">
                    <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                        <h2>Your text summary</h2>
                        <p>{text.split(" ").length} words and {text.length} characters</p>
                        <p>{0.008 * text.split(" ").length} Minutes read</p>
                        <h2>Preview</h2>
                        <p>{text}</p>
                        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
                    </div>
                </div>
            </div>     
                </>
                )
    };