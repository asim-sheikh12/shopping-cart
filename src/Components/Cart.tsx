import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { DeleteItem } from "../Redux/Actions";
export const Cart = () => {
  const [data,setData] = useState<any[]>([])
  const dispatch = useDispatch();


  const productList = useSelector((state:any) => state.Reducer.productList);
 useEffect(() => {
   setData(productList)

   console.log(data)
 }, [data])
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
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
                    {item.data.productData.title}
                  </h5>
                  <img src={item.data.productData.image} height="200px" width="200px" />
                  <h2>Price: $ {item.data.productData.price}</h2>
                  <Button onClick={()=>dispatch(DeleteItem(item.data.productData.id))}>Remove Item</Button>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
    </div>
  );
};
