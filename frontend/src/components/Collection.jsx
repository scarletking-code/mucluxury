import React from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const Collection = () => {

    const { products } = React.useContext(ShopContext);
    const [Products, setProducts] = React.useState([]);

    React.useEffect(() => {
        setProducts(products.slice(0, 4));
    }, []);

   

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'OUR'} text2={'COLLECTION'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Discover our latest clothing collection. Premium quality apparel designed for style and comfort.
            </p>
        </div>

        {/* Rendering products */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6">
            {Products.map((item,index) => (
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
            }
        </div>

    </div>
  )
}

export default Collection
