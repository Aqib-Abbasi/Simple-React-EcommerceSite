import React from "react";
import { useParams } from "react-router-dom";
import Shoe from './../Shoe'

const Detailpro = () => {
  const { id } = useParams();
  const shoe=Shoe[id];
  if(!shoe)
  return<h2>Product Not Found</h2>
  return(
    <div style={{marginLeft:"50px"}}>
    <h2>{shoe.name}</h2>
    <img src={shoe.img} height={150} alt=""/>
    <h3>Price:{shoe.price}</h3>

    </div>
)};

export default Detailpro;
