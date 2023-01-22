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
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleVowelClick}>Vowels count</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleConsonantClick}>Consonants count</button>




    </div>
    <div className="container my-3"  style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes taken to read the text</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
        <p>{count} No of vowels</p>
        <p>{count1} No of consonants</p>
    </div>
    </>
  )
}
