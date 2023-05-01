import "./App.css";
import Card from "./components/Card/Card";
import {AiOutlineShoppingCart}  from "react-icons/ai";
import Navbar from "./components/Navbar/Navbar";

function App() {

  const contenido = [
    {
      titulo:'Papa',
      
    },
    
  ]

  return (
    <div className="App">
      <div className="titulo">
          Bienvenido a Green Organic Market
      </div>
     
     <h1><AiOutlineShoppingCart/></h1>

     <Navbar items={['Inicio', 'Categorias']} navbarLogoCss={"text-danger navbar"}></Navbar>
      
      {/* <Contador initialValue={10}/>  */}

      {contenido.map((superheroe,index) => (
        <Card key={index} titulo={superheroe.titulo} descripcion={superheroe.descripcion} imagen={superheroe.imagen}/>
      ))}

      

    </div>
  );
}

export default App;
