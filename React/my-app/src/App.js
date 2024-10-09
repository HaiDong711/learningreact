import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import NewEventHolder from './component/neweventholder';
import ToDoList from './component/ToDoList';
import { useCallback, useState } from 'react';

function App() {
  const [data,setData] = useState(defaultData)
  const onAddevent = useCallback((newEvent)=>{
    setData([...data,newEvent])
  })
  return (
    <div classname = "App">
        <Card ClassName = "container" title={(Header/)}> 
          <Header/>
          <NewEventHolder onAddevent={onAddevent}/>
          <ToDoList/>
        </Card>
        
    </div>
  );
}


export default App;
