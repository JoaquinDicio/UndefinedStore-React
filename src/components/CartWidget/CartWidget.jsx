import './CartWidget.css'
import {FaShoppingCart} from 'react-icons/fa'

function CartWidget({version,items }) {
    return (
        <>
            <div className={version}>
            <FaShoppingCart className='icon'/>
            <span className='items'>{items}</span>
            </div>  
        </>

    )
}
export default CartWidget