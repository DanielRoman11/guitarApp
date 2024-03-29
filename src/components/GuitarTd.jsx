export function GuitarTd({ removeItem, addToCart, itemsAdded, itemLessTimes, item }){
  const { id, name, image, price } = item;

  return (
    <tr>
      <td>
          <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
      </td>
      <td>{name}</td>
      <td className="fw-bold">${price}</td>
      <td className="flex align-items-start gap-4">
          <button
              type="button"
              className="btn btn-dark"
              onClick={() => itemLessTimes(id)}
          >
              -
          </button>
              {itemsAdded(id)}
          <button
              type="button"
              className="btn btn-dark"
              onClick={() => addToCart(item)}
          >
              +
          </button>
      </td>
      <td>
          <button
              className="btn btn-danger"
              type="button"
              onClick={() => removeItem(id)}
          >
              X
          </button>
      </td>
    </tr>
  )
}