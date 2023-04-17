import { useState } from "react";
import Header from "./components/Header"
import Products from "./components/Products"
import Card from "./components/Card"

function App() {
  const [card, setCard] = useState([]);
  return (
    <div className="container mx-auto p-4">
     <Header/>
     <Products card={card} setCard={setCard}/>
     {card.length > 0 && <Card/>}
    </div>
  )
}

export default App
