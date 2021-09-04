import React,{useState,useEffect} from 'react';


const Cuenta = ({cantidad},{index}) => {
    const [suma,setsuma]=useState(0);

    useEffect(() => {
        setsuma(suma+cantidad);
      
      }, [cantidad]);

return (
 
    <>
    
   
    
        </>
)

}

export default Cuenta