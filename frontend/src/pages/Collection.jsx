import React, { useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import { assets } from '../assets/assets';

const Collection = () => {

  const {products, search, showSearch} = React.useContext(ShopContext);
  const [filterProducts, setFilterProducts] = React.useState([]);
  const [sortType, setSortType] = React.useState('relevant');
  const [showFilter, setShowFilter] = React.useState(false);
  const [category, setCategory] = React.useState([]);

  const toggleCategory = (e) => {

    if (category.includes(e.target.value)) {
      setCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {

    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    setFilterProducts(productsCopy);

  }


  React.useEffect(() => {
    applyFilter();
  },[category, search, showSearch])

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();
  
    switch(sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b) => (a.price - b.price)));
          break;
  
      case 'high-low':
        setFilterProducts(
          fpCopy.sort((a,b) => (b.price - a.price)));
            break;
  
        default:
          setFilterProducts(products);
          break;   
      }
  }


  React.useEffect(() => {
    sortProduct();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      

      {/* Filter Section / Left Side */}
      <div className="min-w-60">
        <p onClick={()=>setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTER
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" /></p>  
        {/* Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='font-medium text-sm mb-3'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'suit'} onChange={toggleCategory}/> Suit
            </p>
            <p className="flex gap-2">
               <input type="checkbox" className='w-3' value={'casual'} onChange={toggleCategory}/> Casual
            </p>
            <p className="flex gap-2">
               <input type="checkbox" className='w-3' value={'native'} onChange={toggleCategory}/> Native
            </p>
          </div>
        </div>
      </div>

      {/* Products Section / Right Side */}
      <div className='flex-1'>

        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>
          {/* product sort */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: Relevance</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {
            filterProducts.map((item,index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Collection
