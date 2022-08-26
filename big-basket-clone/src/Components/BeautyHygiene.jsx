import { Grid, GridItem,Heading,Center } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";

function getBO() {
  return fetch("https://json-server-bb-clone.herokuapp.com/api/BeautyHygiene")
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
}
export default function BeautyHygiene() {
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
        Beauty & Hygiene
  </Heading>
  </Center>
  <hr/>
  <br/>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {data.map((el) => {
          return (
            el.id===1?<GridItem rowSpan={2} colSpan={2} key={el.id} ><img src={el.image} alt="error" /></GridItem>:<GridItem colSpan={1} key={el.id}>
              <img src={el.image} alt="error" />
            </GridItem>
          );
        })}
      </Grid>
    </div>
  );
}
