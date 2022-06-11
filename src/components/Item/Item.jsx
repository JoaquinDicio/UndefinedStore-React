import './Item.css'
import Button from '../Button/Button.jsx'

export default function Item({ title, desc, price, pictureURL }) {
    return (
        <div className='item d-flex flex-column justify-content-center'>
            <div className='imgContainer'>
                <img src={pictureURL} alt={title} />
            </div>
            <div className='foot d-flex flex-column justify-content-center'>
                <h4 className='text-center'>${price}</h4>
                <h5 className='text-center'>{title}</h5>
                <p className='text-center'>{desc}</p>
                <Button btnStyle={'btn btn-primary text-center'} text={'Comprar'} />
            </div>
        </div>
    )
}
