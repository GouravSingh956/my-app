import React from 'react'

export default function About(props) {
    
    let myStyle ={
        color: props.mode === 'dark'?'white':'rgb(36 74 104)',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white'
    }

  return (
    <div className='container my-3'>
        <h1 className='my-2' style={{color: props.mode === 'dark'?'white':'rgb(36 74 104)'}}>About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyse your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    TextUtils gives you a way to analyse your text efficiently and quickly. Be it word count, character count, minutes read, converting to Uppercase or Lowercase etc.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    TextUtils is a free tool that allows basic operations on your text and provides basic statistics like word count, character count etc.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong> Browser compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This word count tool works in any web browser such as Chrome, Firefox, Internet Explorer, Opera etc.
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
