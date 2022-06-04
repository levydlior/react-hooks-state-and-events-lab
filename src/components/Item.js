import React, {useState} from "react";


function Item({ name, category }) {

  const [itemInCart, setItemInCart] = useState(false)

  const buttonText = !itemInCart? "Add to cart": "Remove From Cart"

  function handleClick(){
    setItemInCart(!itemInCart)
  }

  return (
    <li className={itemInCart? "in-cart": ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{buttonText}</button>
    </li>
  );
}

export default Item;
