import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';



const Filters = () => {
  const [pid, setPid] = useState(1);
  const [products, setProducts] = useState([]);


  const onListProducts = async () => {
   
    try {
      const response = await fetch("https://kvsserver.onrender.com/listproducts");
      console.log(response);
      if (response) {
        const res = await response.json();
        console.log(res);
        setProducts(res);
      }

    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    onListProducts()
  }, []); 


  return (
    <>
    <div className='overflow-x-scroll container mx-auto px-4 ' >
      <section className="my-10 py-3 w-2/3 md:w-4/6 mx-auto flex flex-col md:flex-row justify-center ">
        <button className="btnStyle bg-black head " onClick={() => setPid(1)}>Men's Collection</button>

        <button className="btnStyle  bg-black head " onClick={() => setPid(2)}> Women's Collection</button >
        <button className="btnStyle bg-black head" onClick={() => setPid(3)}>Kid's Collection</button>
      </section>
      </div>
      <div className='card'>
      <section className='w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 my-10 py-10 card-img'>
        {
          products.filter(product => product.pid == pid).map((filterproduct) => {
            return <ProductCard key={filterproduct.id} product={filterproduct} />
          })
        }
      </section >
      </div>
      <br/>
      <br/>
    </>
  );


}

export default Filters