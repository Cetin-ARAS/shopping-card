
const Card = ({card}) => {
  
  if(card.length === 0) return;
  return (
    <div className="border ml-auto w-72 p-4 mt-2 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Sepet</h2>
        <ul>
            { card.map((item)=>(
                <li className="mt-2 flex justify-between">
                   <span>{item.name}</span>
                    <span>{item.price} TL</span>
                </li>
            ))}
      </ul>
      <hr className="my-4" />
      <p className="font-semibold text-xl">Toplam: 100 TL</p>
      <button className="bg-red-500 text-white p-2 mt-2 rounded  hover:bg-red-600 transition-all w-full mt-4 ">Sepeti Boşalt</button>
    </div>
  )
}

export default Card
