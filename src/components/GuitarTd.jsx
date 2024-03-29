export function GuitarTd(props){
  const { id, name, image, price } = props.item;
  const { removeItem, cantidad, setCantidad, amount, setAmount } = props;

  const addTimes = (id) => {
    const thisTimes = cantidad.find((item) => item.id === id)
    thisTimes.times += 1 
    setCantidad([...cantidad])
    setAmount(amount + price)
  }

  const lessTimes = (id) => {
    const thisTimes = cantidad.find((item) => item.id === id)

    if(thisTimes.times > 1){
        thisTimes.times -= 1
        setCantidad([...cantidad])
        setAmount(amount - price)
    }
  }

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
              onClick={() => lessTimes(id)}
          >
              -
          </button>
              {
                cantidad.find((item) => item.id === id).times
              }
          <button
              type="button"
              className="btn btn-dark"
              onClick={() => addTimes(id)}
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