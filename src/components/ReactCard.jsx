import React, { useEffect, useState } from 'react'


const ReactCard = () => {
    const [products, setProducts] = useState([])

    const [search, setSearch] = useState([])

    

    useEffect(()=>{
         
        
    let input = (document.getElementById('search-navbar'))

    input?.addEventListener('keyup', (e)=>{ 
        
        console.log(input.value)

        setSearch(input.value)
       
    })
   
    
   
        const getProducts = async () => {
            
            const res = await fetch("http://localhost:4321/api/getProducts.json");
            const data = await res.json()
            setProducts(data)
            
        }
 
        getProducts()
    }, [])

    

  return (
    
  
  
    <div class="grid grid-cols-4 grid-rows-4 justify-items-center mt-40 mx-20 text-white gap-4">{products.filter((el) => el.title.toLowerCase().includes(search.toString().toLowerCase())).map((product, index)=> 
      
      ( 

        <div key={index}class="max-w-sm bg-black border border-gray-800 rounded-lg shadow">
            
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{ product.title }</h5> 
                    <h6 class="mb-2 text-sm font-bold tracking-tight text-white" >{'Precio: ' + product.price + '$'}</h6>
                    <h6 class="mb-2 text-sm font-bold tracking-tight text-white" >{'Descuento: ' + product.discount + '%'}</h6>
                    <h6 class="mb-2 text-sm font-bold tracking-tight text-white" >{'Rating: ' + product.rating + ' ★'}</h6>
                </a>
                <p class="mb-3 mt-3 text-lg font-normal text-white">{product.description}</p>
                
                <div class='flex flex-row justify-between mt-2' >
                <h6 class="mb-2 text-sm font-bold tracking-tight text-white" >{'Stock: ' + product.stock}</h6>
                <h6 class="mb-2 text-sm font-bold tracking-tight text-white" >{'Marca: ' + product.brand}</h6>
                <h6 class="mb-2 text-sm font-bold tracking-tight text-white" >{'Serial: ' + product.serial}</h6>
                <h6 class="mb-2 text-sm font-bold tracking-tight text-white" >{'Categoria: ' + product.category}</h6> 
                </div>
               
                
            </div>
        </div>
        ))}</div>
   
  )
}



export default ReactCard
