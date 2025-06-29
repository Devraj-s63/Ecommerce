import React, { useContext } from 'react'
import {ShopContext} from "../Context/ShowContext";
import { useParams } from 'react-router-dom';
import BredCrums from '../Components/BredCrums/BredCrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Description from '../Components/Description/Description';
import ReletedProducts from '../Components/ReletedProducts/ReletedProducts';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id == productId)
  return (
    <div>
      <BredCrums product={product}/>
      <ProductDisplay product={product} />
      <Description/>
      <ReletedProducts/>
    </div>
  )
}

export default Product
