import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { DeleteItem } from "../Redux/Actions";
import Header from "./Header";
export const Cart = () => {
  const [data,setData] = useState<any[]>([])
  const dispatch = useDispatch();


  const productList = useSelector((state:any) => state.Reducer.productList);
  console.log("Cart Item>>>>>",productList)
 useEffect(() => {

   setData(productList)

  //  console.log(data)
 }, [data,productList])
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  let Total = data.reduce((total, item) => item.data.price + total, 0)

  return (  
    <div>
      <Header/>
      <h1>Cart Total : {Total} </h1>
        <Box sx={{ flexGrow: 35 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            // maxHeight="80%"
          >
            {data.map((item, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Item>
                  <h5>
                    {item.data.title}
                  </h5>
                  <img src={item.data.image} height="200px" width="200px" />
                  <h2>Price: $ {item.data.price}</h2>
                  <h2>ID: {item.data.id}</h2>
                  <Button onClick={()=>dispatch(DeleteItem(item.data.id))}>Remove Item</Button>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
    </div>
  );
};
