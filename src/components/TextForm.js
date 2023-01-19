import React,{useState} from 'react'

export default function TextForm(props) {
    let [count,setCount]=useState(0)
    let [count1,setCount1]=useState(0)
    let countchar=0
    let countcon=0
    const handleUpClick=()=>{
        console.log("UpperCase was clicked"+text)
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase","success")
    }
    const handleLowClick=()=>{
        console.log("LowerCase was clicked"+text)
        let newText=text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase","success")

    }
    const handleClearClick=()=>{
        console.log("Clear Text was clicked"+text)
        setText("")
        props.showAlert("Text is cleared","success")

    }
    const handleVowelClick=()=>{
       for(count=0;count<text.length;count++)
       {
        if(text.charAt(count).match(/[aeiouAEIOU]/))
        countchar++;
        setCount(countchar)
       }
       props.showAlert("Vowels counted","success")

    }
    const handleConsonantClick=()=>{
        for(count1=0;count1<=text.length;count1++)
        {
            if(text.charAt(count1).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/))
            countcon++
            setCount1(countcon)
        }
       props.showAlert("Consonants counted","success")

    }
    const handleOnChange=(event)=>{
        // console.log("On change")
        setText(event.target.value)
    }
    const [text,setText]=useState("")
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleVowelClick}>Vowels count</button>
        <button className="btn btn-primary mx-2" onClick={handleConsonantClick}>Consonants count</button>




    </div>
    <div className="container my-3"  style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length}Minutes taken to read the text</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        <p>{count} No of vowels</p>
        <p>{count1} No of consonants</p>
    </div>
    </>
  )
}
