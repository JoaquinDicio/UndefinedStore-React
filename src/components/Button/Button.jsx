import './Button.css'
export default function Button({btnStyle,text,clicked}){
    return(
        <button onClick={clicked} className={btnStyle}>{text}</button>
    )
}