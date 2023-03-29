import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { carts } from "../DynamicCard";
import "..//Category.css"
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["Our product", "About it", "Prices"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Bnavbar = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };



  const [noOfelement, setNoElement] = useState(3)

  const slice = carts.slice(0, noOfelement)

  const loadMore = () => {
    setNoElement( noOfelement + noOfelement)
  }
  return (
    <>
      <Container>
        <Row className="justify-content-end">
          <Col xs={4}>
            <div>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel
                  style={{ paddingLeft: "50px" }}
                  id="demo-multiple-name-label"
                >
                  По полулярности
                </InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="sectioncategory">
        <Container>
          <Row className="mb-5 mt-5">
           {slice.map((item) => (
             <Col xs={4} className="mb-2">
             <Card style={{ width: "25rem", textAlign: "center", position:"relative" }}>
               <i class="fa-regular fa-heart heart1"></i>
               <Card.Img variant="top" src={item.img} alt="" className="img1" />
               <Card.Body>
                 <Card.Title
                   style={{ fontSize: "18px", fontWeight: "300" }}
                   className="titlecategory"
                 >
                   {item.name}
                 </Card.Title>
                 <Card.Text
                   style={{ fontSize: "30px", fontWeight: "700" }}
                   className="price"
                 >
                   {item.price}
                   {item.net}
                   <h4>{item.message}</h4>
                 </Card.Text>
               </Card.Body>
               <Card.Body>
                 <i
                   style={{position:"absolute"}}
                   className="fa-solid fa-cart-shopping bucket"
                 ></i>
               </Card.Body>
             </Card>
           </Col>
           ))}
          </Row>
        </Container>

        <button 
        onClick={() => loadMore()}
        className="btn btn-dark d-block w-100 mb-5">See more</button>
      </div>
    </>
  );
};

export default Bnavbar;
