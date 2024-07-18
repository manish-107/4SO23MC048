import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import axios from "axios";

import {
  Card,
  CardActions,
  Grid,
  CardContent,
  Typography,
  Rating,
  Button,
} from "@mui/material";

const Page = () => {
  const [token, settoken] = useState("");
  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetchProducts("AMZ", "Laptop");
  }, [token]);

  // getAuthorization if token expires
  const getAuthorization = async () => {
    try {
      const authRes = await axios.post("http://20.244.56.144/test/auth", {
        companyName: "GoMart",
        clientID: "6ad96005-6025-4da0-8a34-951e997feb2d",
        clientSecret: "VyzjclIrkHsQGtIs",
        ownerName: "manish",
        ownerEmail: "23ca048.manish@sjec.ac.in",
        rollNo: "4SO23MC048",
      });
      localStorage.setItem(
        "authorization",
        `Bearer ${authRes.data.access_token}`
      );
      settoken();
      console.log(authRes.data.access_token);
      console.log(token);
    } catch (error) {
      console.log(error);
    }
  };

  // fetch products
  const fetchProducts = async (company, categories) => {
    try {
      let token = localStorage.getItem("authorization");

      const res = await axios.get(
        `http://20.244.56.144/test/companies/${company}/categories/${categories}/products?top=10&minPrice=1&maxPrice=10000`,
        {
          headers: {
            authorization: `${token}`,
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

        <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
          {products.length > 0 ? (
            products.map((product) => (
              <Grid key={product.rating} item xs={4} sm={4} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.productName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Price :{product.price}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ paddingTop: "5px" }}
                      color="text.secondary"
                    >
                      discount : {product.discount}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Typography variant="body2" color="text.secondary">
                      Rating :
                      <Rating
                        name="read-only"
                        value={product.rating}
                        readOnly
                      />
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
                onClick={getAuthorization}
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
