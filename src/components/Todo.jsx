import React,{useState} from 'react';

const Todo = ({id,numero,todo,list,index,deleteTodo,compras,a,multiplicacion}) => {
   

return (

    <>
   <div className='separado'>
    <div className="list">
  
     <h2>  {todo}</h2>        <div className="input-number">  
    
            <input className="modi-number" onChange={(e)=>multiplicacion(e.target.value,index)}  placeholder="1" type="number" /> 
     
    <button className="btn-delete" onClick={() => deleteTodo(index)}>x</button>
        

    </div>
    </div>
    </div>
    <hr />
    

    </>
  
)

}

export default Todo