export const BasketItem = ({ id, name, price, count, onPlus, onMinus, onRemove }) => {
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{price} USD</td>
                <td>{count}</td>
                <td>{count * price} USD</td>
                <td className="buttons">
                    <button className="plus" onClick={() => onPlus(id)}>+</button>
                    <button className="minus" onClick={() => onMinus(id)}>–</button>
                    <button className="remove" onClick={() => onRemove(id)}>x</button>
                </td>
            </tr>
        </>
    )
}