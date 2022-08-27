import { Grid, GridItem, Heading, Center } from "@chakra-ui/react";
import { Divider } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import Products from "./Products";

function getBO() {
  return fetch("https://json-server-bb-clone.herokuapp.com/api/BestSellers")
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
}
export default function BestSellers() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getBO()
      .then((res) => {
        console.log(res);
        setData([...res]);
      })
      .catch((err) => {
        console.log(err);
      });

    setTimeout(()=>{
        console.log(data);
    },4000)
  }, []);
  return (
    <div
      style={{
        width: "85%",
        margin: "auto",
        marginTop: "30px",
        marginBottom: "30px",
      }}
    >
      <Center>
        <Heading as="h3" size="lg">
          Best Sellers
        </Heading>
      </Center>
      <Divider />
      <br />
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {data.length?data.map((el) => {
          return (
            <GridItem w="100%" h="100%" bg="blue.500" key={el.id}>
              {el.rating ? (
                <Products
                  name={el.name}
                  category={el.category}
                  option={el.options}
                  rating={el.rating}
                  ratingCount={el["rating-count"]}
                />
              ) : (
                <Products
                  name={el.name}
                  category={el.category}
                  option={el.options}
                />
              )}
            </GridItem>
          );
        }):""}
      </Grid>
    </div>
  );
}
