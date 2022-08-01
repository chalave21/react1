import './App.css';
import NavBar from './components/navbar/NavBar';
import Card from './components/card/Card';
import Button from './components/Button/Button';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "./components/ItemListContainer/ItemListContainer"


function App() {
  const dataProduct = [ {
    name: "Whey Proteina",
    precio: "$"+4000,
    img:"https://picsum.photos/200/300",
    description1: "Proteina de la mas alta calidad",
    description2: "80% de proteina",
},
{
  name: "Creatina",
  precio: "$"+8000,
  img:"https://picsum.photos/200/300",
  description1: "Creatina de la mas alta calidad",
  description2: "Monohidrato de creatina",
},
];
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Basado en tu ultima visita"/>
      <div className='main'>
        <Card dataProduct={dataProduct[0]} />
        <Card dataProduct={dataProduct[1]} />
      </div>
    </div>

  );
}

export default App;
