import { Grid, GridItem,Heading,Center } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";

function getBO() {
  return fetch("https://json-server-bb-clone.herokuapp.com/api/HomeKitchen")
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
}
export default function HomeKitchen() {
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
            Home & Kitchen Essentials
  </Heading>
  </Center>
  <hr/>
  <br/>
      <Grid templateColumns="repeat(6, 1fr)" gap={6}>
        {data.map((el) => {
          return (
            <GridItem w="100%" h="100%" bg="blue.500" key={el.id}>
              <img src={el.image} alt="error" />
            </GridItem>
          );
        })}
      </Grid>
    </div>
  );
}
