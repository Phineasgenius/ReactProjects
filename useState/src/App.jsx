// import './App.css';
// import { useState, React } from 'react';

// const App = () => {
//   const[count, setCount] = useState(0)
//   return (
//     <div className="App">
//       <div>Button clicked {count} times</div>
//       <button onClick={()=> {setCount((prev)=>prev+1);
//       setCount((prev)=>prev + 1)}}>
//         Click
//       </button>
//     </div>
//   ) 
// }

// export default App

// import './App.css';
// import { useState, React} from 'react';

// const App = () => {
//   const[state, setState] = useState({count: 0, clicks: 0});  
//   return (
//     <div className="App">
//       <div>Button clicked {state.count} times</div>
//       <div>Clicks: {state.clicks}</div>
//       <button onClick={()=> {setState({...state, count: state.count + 1, clicks: state.clicks + 2})}}>
//         Click
//       </button>
//     </div>
//   ) 
// }

// export default App



import './App.css';
import { useState, React } from 'react';

const App = () => {
  // const[count, setCount] = useState(0)
  const [items, setItem]=useState([])
  return (
    <div className="App">
      <div>{items}</div>
      <button onClick={()=> {setItem([...items, `Item ${items.length + 1}`])}}>
        Add Items
      </button>
    </div>
  ) 
}

export default App
