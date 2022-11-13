// TODO: create a component that displays a single bakery item
export function BakeryItem({item, index, updateCart, price, setPrice}) {
  return(
    <div>
      <h3>{item.name}</h3>
      <img src={item.image}/>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <button onClick={() => {updateCart(index); setPrice(price+item.price)}}>Add to Cart</button>
    </div>
  )
}