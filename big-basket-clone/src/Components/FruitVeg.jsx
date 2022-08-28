import { Grid, GridItem,Heading,Center } from "@chakra-ui/react";
import { Divider } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import stylesa from "./allcss.module.css";

function getBO() {
  return fetch("https://json-server-bb-clone.herokuapp.com/api/FruitsVegetables")
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
}
export default function FruitVeg() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getBO()
      .then((res) => {
        setData([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div style={{
        width:"85%",
        margin:"auto",
        marginTop:"30px",
        marginBottom:"30px",
    }}>
        <Center><Heading as='h3' size='lg'>
        Fruits & Vegetables
  </Heading>
  </Center>
  <Divider />
  <br/>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {data.map((el) => {
          return (
            el.id===1?<GridItem rowSpan={2} colSpan={2} key={el.id} className={stylesa.borderg}><img src={el.image} alt="error"  /></GridItem>:<GridItem colSpan={1} key={el.id} className={stylesa.borderg}>
              <img src={el.image} alt="error" />
            </GridItem>
          );
        })}
      </Grid>
    </div>
  );
}
