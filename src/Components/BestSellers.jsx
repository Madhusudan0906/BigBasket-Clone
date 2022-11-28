import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Heading, Center } from "@chakra-ui/react";
import { Divider } from "antd";
import Slider from "react-slick";
import { useEffect } from "react";
import { useState } from "react";
import Products from "./Products";


function getBO() {
  return fetch("https://bigbasket-json-server.onrender.com/api/BestSellers")
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey",height:"30px",paddingTop:"5px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey",height:"30px",paddingTop:"5px" }}
      onClick={onClick}
    />
  );
}
export default function BestSellers() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(()=>{getBO()
      .then((res) => {
        setData([...res]);
        return res;
      })
      .catch((err) => {
        console.log(err);
      });},1000)
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
  };
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
      <Slider {...settings} style={{width:"100%"}}>
      
      
        {data.length>0?data.map((el) => {
          return (<>
              {el.rating ? (
                <Products
                id={el.id}
                  name={el.name}
                  category={el.category}
                  option={el.options}
                  rating={el.rating}
                  ratingCount={el["rating-count"]}
                />
              ) : (
                <Products
                id={el.id}
                  name={el.name}
                  category={el.category}
                  option={el.options}
                />
              )}
              </>
          );
        }):""}

      </Slider>
    </div>
  );
}
