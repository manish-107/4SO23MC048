import React, { useState } from "react";
import Container from "@mui/material/Container";
import axios from "axios";
import {
  Card,
  CardActions,
  Grid,
  CardContent,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";

const Page = () => {
  const [products, setproducts] = useState([]);
  const fetchProducts = async (company, categories) => {
    try {
      const res = await axios.get(
        `http://20.244.56.144/test/companies/${company}/categories/${categories}/products?top=10&minPrice=1&maxPrice=10000`,
        {
          headers: {
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIxMjk1MjY5LCJpYXQiOjE3MjEyOTQ5NjksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjZhZDk2MDA1LTYwMjUtNGRhMC04YTM0LTk1MWU5OTdmZWIyZCIsInN1YiI6IjIzY2EwNDgubWFuaXNoQHNqZWMuYWMuaW4ifSwiY29tcGFueU5hbWUiOiJHb01hcnQiLCJjbGllbnRJRCI6IjZhZDk2MDA1LTYwMjUtNGRhMC04YTM0LTk1MWU5OTdmZWIyZCIsImNsaWVudFNlY3JldCI6IlZ5empjbElya0hzUUd0SXMiLCJvd25lck5hbWUiOiJtYW5pc2giLCJvd25lckVtYWlsIjoiMjNjYTA0OC5tYW5pc2hAc2plYy5hYy5pbiIsInJvbGxObyI6IjRTTzIzTUMwNDgifQ.WCZcdicQqCCRWUGpsJAqIn18KrpNGgmbUv6cfcidrHE",
          },
        }
      );
      setproducts(res.data);
      console.log(products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Container maxWidth="lg">
        <Button
          sx={{ margin: "20px" }}
          variant="contained"
          onClick={() => fetchProducts("AMZ", "Laptop")}
          color="secondary"
        >
          Fetch Data
        </Button>
        <Button
          sx={{ margin: "20px" }}
          variant="contained"
          onClick={() => fetchProducts("AMZ", "Laptop")}
          color="secondary"
        >
          Fetch Data
        </Button>
        <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
          {products.length > 0 ? (
            products.map((product) => (
              <Grid key={product} item xs={4} sm={4} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.productName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Price :{product.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Typography variant="body2" color="text.secondary">
                      Rating : {product.rating}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      discount : {product.discount}
                    </Typography>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <div
              style={{
                marginTop: "50px",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="body1" color="initial">
                Authorization Token expaired
              </Typography>
              <Button
                sx={{ margin: "20px" }}
                variant="contained"
                color="secondary"
              >
                Authorization
              </Button>
            </div>
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default Page;
