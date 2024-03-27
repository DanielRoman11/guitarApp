export function GuitarTd(props){
  const { id, name, image, price } = props.item;

  return (
    <tr>
      <td>
          <img className="img-fluid" src={`./public/img/${image}.jpg`} alt="imagen guitarra" />
      </td>
      <td>{name}</td>
      <td className="fw-bold">${price}</td>
      <td className="flex align-items-start gap-4">
          <button
              type="button"
              className="btn btn-dark"
          >
              -
          </button>
              1
          <button
              type="button"
              className="btn btn-dark"
          >
              +
          </button>
      </td>
      <td>
          <button
              className="btn btn-danger"
              type="button"
              onClick={() => props.removeItem(id, price)}
          >
              X
          </button>
      </td>
    </tr>
  )
}