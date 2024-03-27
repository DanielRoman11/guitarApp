import { GuitarTd } from "./GuitarTd";

export default function Header(props) {
    const { cart, setCart, amount, setAmount } = props;

    const removeItem = (id, price) => {
        setCart(cart.filter((item) => item.id !== id));
        setAmount(amount - price);
    };

    const flushCart = () => {
        setAmount(0); setCart([]);
    };
    

    return (
        <header className="py-5 header">
        <div className="container-xl">
            <div className="row justify-content-center justify-content-md-between">
                <div className="col-8 col-md-3">
                    <a href="index.html">
                        <img className="img-fluid" src="./public/img/logo.svg" alt="imagen logo" />
                    </a>
                </div>
                <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                    <div 
                        className="carrito"
                    >
                        <img className="img-fluid" src="./public/img/carrito.png" alt="imagen carrito" />

                        <div id="carrito" className="bg-white p-3">
                            <p className="text-center">{
                            cart.length == 0 
                                ? `El carrito esta vacio` 
                                : <span>Tienes <strong>{cart.length}</strong> {
                                    cart.length === 1 
                                        ? "item" 
                                        : "items"
                                    } en el carrito.</span>
                            }</p>
                            <table className="w-100 table">
                                <thead>
                                    <tr>
                                        <th>Imagen</th>
                                        <th>Nombre</th>
                                        <th>Precio</th>
                                        <th>Cantidad</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.map((item) => {
                                            return (
                                                <GuitarTd
                                                    key={item.id}
                                                    item={item}
                                                    removeItem={removeItem}
                                                />
                                            )
                                        })
                                    }
                                </tbody>
                            </table>

                            <p className="text-end">Total pagar: <span className="fw-bold">${amount}</span></p>
                            <button 
                                className="btn btn-dark w-100 mt-3 p-2"
                                onClick={()=> flushCart()}
                            >Vaciar Carrito</button>
                    </div>
                </div>
                </nav>
            </div>
        </div>
        </header>
    )
}