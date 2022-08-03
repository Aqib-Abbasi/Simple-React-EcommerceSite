import { Link } from "react-router-dom";
import React from "react";
import Shoe from "./../Shoe";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
const Product = () => {
  return (
    <Box sx={{ maxWidth: 1000, marginLeft: 20 }}>
      <Grid container spacing={2}>
        {Object.keys(Shoe).map((keyName) => {
          const shoe = Shoe[keyName];
          return (
            <Grid item xs={12} md={4} key={keyName}>
              <Link className="descp" to={`/product/${keyName}`}>
              <div >
                <h2 >{shoe.name}</h2>
                <img src={shoe.img} height={150} alt="" />
                </div>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
//      <Grid container spacing={2}>
//     <div className='Store'>

//       {Object.keys(Shoe).map(keyName=>{
//         const shoe=Shoe[keyName]
//         return(
//           <Box sx={{ maxWidth: 1000, marginLeft: 20 }}>
//           <Grid item xs={12} md={4} key={keyName}>
//           <Link className='descp' to={`/product/${keyName}`}>
//           <h2>{shoe.name}</h2>
//           <img src={shoe.img} height={150} alt=""/>

//           </Link>
//           </Grid>

//         )
//       })}
//       </Box>

//       </div>
//       </Grid>
//   )
// }

export default Product;
