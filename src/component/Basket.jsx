import { BasketItem } from "./BasketItem"

export const Basket = ({ cart, onPlus, onMinus, onRemove, onSort}) => {
    return <div className='col-md-5'>
        <h3>Items: {cart.length}</h3>
        <table className='table table-dark table-bordered'>
            <thead>
                <tr>
                    <th>Product</th>
                    <td>
                    <button className="sort" onClick={onSort}>Price</button>
                    </td>
                    <th>Count</th>
                    <th>Subtotal</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {cart.map(el => <BasketItem key={el.id} onPlus={onPlus} onMinus={onMinus} onRemove={onRemove}  {...el} />)}
            </tbody>
        </table>
    </div>
}