import { useState } from "react"

const Delete=()=>{

const[state,setState]=useState(['An item','A second item','A third item','A fourth item','And a fifth one'])
const[input,setInput]=useState("")
const change=(event)=>{
  setInput(event.target.value)
}
  const click=()=>{
    const newArr=[...state,input]
    setState(newArr)
  }
  const deleteMe=(index)=>{
    const item1=state.slice(0,index)
    const item2=state.slice(index+1)
    setState([...item1,...item2])
    
  }

  return(
<>
  <div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label"><h1>Add Todo</h1></label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Add ToDo"
      onChange={change}/>
  </div>

  <button type="button" class="btn btn-primary btn-sm" style={{backgroundColor:"red"}} onClick={click}>add to the list</button>

  <ul className="list-group" style={{marginTop:"10px"}}>
    {
      state.map((ele,index)=>{
      return <li class="list-group-item"> {ele}<button onClick={()=>deleteMe(index)}>Delete</button>
      
      </li>
    })
    }

  </ul>
</>

  )
}
export default Delete