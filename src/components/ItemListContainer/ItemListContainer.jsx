import './ItemListContainer.css'

function ItemListContainer({ greetings,subtitle }) {
    return (
        <main className="container-fluid">
            <div className="list-container d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-center">{greetings}</h2>
                <p className='text-center'>{subtitle}</p>
            </div>
        </main>
    )
}
export default ItemListContainer