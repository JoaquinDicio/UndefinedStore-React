import './CartWidget.css'

function CartWidget({version,items }) {
    return (
        <>
            <div className={version}>
            <i className="fa-solid fa-cart-shopping"></i>
            <span>{items}</span>
            </div>  
        </>

    )
}
export default CartWidget