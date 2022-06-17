import { useDispatch } from "react-redux";

function CounterControls() {

  const dispatch = useDispatch();

  return (  
   <div className="CounterControls">
    <button onClick={()=> dispatch({type: 'counter/increment'})}>+</button>
   
   </div>
  );
}

export default CounterControls;