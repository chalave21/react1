import React from 'react';
function ItemCount(props) {
  const [clicks, setclicks] = React.useState(props.initial);
  const handleIncrement = ()=>
  { 
    if(clicks < props.stock){
        setclicks(clicks + 1);
    }
  }
  const handleDecrement = ()=>
  {
    if(clicks > 1) {
        setclicks(clicks - 1); 
    }
    
  }
  return (
    <div>
      <div>Click Count</div>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      <h3>Clics: {clicks} </h3>
    </div>
  );
}
export default ItemCount;