import React,{ useState} from 'react'
import Todo from '../components/Todo';
import compras from '../compras.json';
import Cuenta from './cuenta';
const Form = () => {
    const [todo, setTodo]=useState ({
    
    })
    var suma=0;
    const [todos,setTodos]=useState([])
    const [vainput,setvainput]=useState([])
    
    const handleChange = e => setTodo ( /* [e.target.name]: */  e.target.value)
// const handleChange1 = e => setnumero (/* [e.target.name]:  */e.target.value)



const handleClick = e => {
    
        if(Object.keys(todo).length === 0 ){
            alert('el campo no puede estar vacio')
            return
      
    }
    setTodos([...todos,todo]);


  /*   if(Object.keys(numero).length === 0 ){
        alert('el campo no puede estar vacio')
        return
        
} */

// setnumeros([...numeros,numero]);


}


/* useEffect(() => {
    const cifra= todo.split(" $ ",2);
   setcantidad(...cifra,cantidad);
 }) */

 
const multiplicacion = (num,index) => {
    
    var valores=[...todos];
                var anterior=parseFloat(valores[index].split(" $ ",2)[1]);
                var nuevo = anterior * num;
            
               anterior=toString(nuevo);
                anterior=nuevo;

                setTodos([...todos])
    todos.map((b,index)=>
     
    <div>
        
        <Cuenta cantidad= {suma=(parseFloat(b.split(" $ ",2)[1]))+suma}  value={index} key={index} deleteTodo={deleteTodo} multiplicacion={multiplicacion}    /> 
   
       {suma}
{/* 
        {(parseFloat(b.split(" $ ",2)[1]))} */}
    </div>
    

    )
    
        
      
        
        
       
                
                
    
        
      
        
        
       
   // var actual=(parseFloat([...todos].split(" $ ",2)[1]));
   

}

const deleteTodo = indice => {
    const newTodos =[...todos]
    newTodos.splice(indice,1)
    setTodos(newTodos)


}
/* const cambiar = indice => {
    const cambio =
    cambio.splice(indice,1)
    setTodos(newTodos)


} */




return (
    <>
 <label> Lista de compras</label>
    <form onSubmit = {e=> e.preventDefault()}>
    <select class="todo" name="todo" id="todo" onChange={handleChange}>
<br />

<option selected disabled="true">--- Seleccione un producto  ---</option>

    {
        compras.compra.map((result,id)=>(
        
       
        < option me={result.precio}key={id} index={id} text={result.nombre}> {result.nombre} $ {result.precio}
     
        </option>
        
      
        )
        
        )            
    }


    </select>
   
           <label> Agregar Producto</label> <br/>
         
        
        
       
       {/*  <input type="hidden"placeholder="Producto"   name="todo"   onChange={handleChange} />,
        <input type="hidden"placeholder="Cantidad" name="numero"   onChange={handleChange1} /> */}
        
     
         
            <button class="btn-agregar" onClick={handleClick}>agregar</button>


           
    </form>
  

    {
     todos.map((a,index)=>
     
     <div>
         
     <Todo todo= {a} key={index} index={index}deleteTodo={deleteTodo} multiplicacion={multiplicacion} /> 
  
     </div>
     
 
     )
   
     
     
    }

{
     todos.map((b,index)=>
     
     <div>
         
         <Cuenta cantidad= {suma=(parseFloat(b.split(" $ ",2)[1]))+suma}  value={index} key={index} deleteTodo={deleteTodo} multiplicacion={multiplicacion}    /> 
    
        
{/* 
         {(parseFloat(b.split(" $ ",2)[1]))} */}
     </div>
     
 
     )
   
     
     
    }

    



    {

    }
        
  {/* {
     compras.compra.map((b,ide)=>
     
     <div>
         
     <Todo compras= {[b.nombre,b.precio]} key={ide} index={ide}deleteTodo={deleteTodo} /> 

     </div>
 
     )
     
     
     
    } */}
       
   Total=         ${suma}
   
  </>
)
}
export default Form 
