import Header from "./components/Header";
import Guitar from "./components/Guitar";
import * as url from './data/db.json'
import { useState } from "react";

function App() {
  const [data] = useState(url.default);
  console.log(data);
  return (
    <>
      <Header/>
      <main className="container-xl mt-5">
          <h2 className="text-center">Nuestra Colección</h2>
            <div className="row mt-5">
              {data.map(({price, name, description, image, id}) => (
                <Guitar
                  key={id}
                  price={price}
                  name={name}
                  description={description}
                  image={image}
                />
              ))}
            </div>
      </main>
      <footer className="bg-dark mt-5 py-5">
          <div className="container-xl">
              <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
          </div>
      </footer>
    </>
  )
}

export default App
