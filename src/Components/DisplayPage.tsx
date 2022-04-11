import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import { AddToCart } from "../Redux/Actions";
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export const DisplayPage = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const productList = useSelector((state:any) => state.Reducer.productList);
  const dispatch = useDispatch();
  const notify = () => toast("Item added to cart!");

  useEffect(() => {
    const url = "https://fakestoreapi.com/products";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        console.log(response)
        const result = await response.json();
        console.log(result)
        setData(result);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <Header/>
      {loading ? (
        <div className="example">
          <CircularProgress />
        </div>
      ) : (
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
                  <h3>
                    {/* {t("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")} */}
                    {item.title}
                  </h3>
                  <img src={item.image} height="200px" width="200px" />
                  <h2>Price: $ {item.price}</h2>
                  <Box
                    className="rating"
                    sx={{
                      width: 200,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Rating
                      name="hover-feedback"
                      value={item.rating.rate}
                      precision={0.1}
                    />
                  </Box>
                  <br />
                  <Button
                    variant="contained"
                    onClick={() => dispatch(AddToCart(item))}
                  >
                    Add To Cart
                  </Button>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </div>
  );
};
