import './ItemDetail.css'
import Button from '../Button/Button'
import ItemCount from '../ItemCount/ItemCount'
export default function ItemDetail({item}) {
  return (
    <div className='product-div container d-flex flex-column align-items-center justify-content-center'>
      <div className='main-info row justify-content-center'>
        <div className='col-md-8 productImg'>
          <img src={item.pictureURL} alt={item.title} />
        </div>
        <div className='col-md-4 text'>
          <h3 className='text-center'>{item.title}</h3>
          <p className='text-center'>{item.description}</p>
          <h3 className='text-center price'>${item.price}</h3>
          <ItemCount currentStock={10}/>
        </div>
      </div>
    </div>
  )
}
