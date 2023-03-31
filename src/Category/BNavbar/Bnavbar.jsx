import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { carts } from "../DynamicCard";
import "..//Category.css";
import { useTranslation } from "react-i18next";
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
  const [getValue, setGetValue] = useState("");
  const [noOfelement, setNoElement] = useState(3);
  console.log(getValue);
  const slice = carts.slice(0, noOfelement);

  const loadMore = () => {
    setNoElement(noOfelement + noOfelement);
  };

  const { t } = useTranslation();
  return (
    <>
      <Container>
        <Row>
          <Col xs={3}>
            <br />
            <h3>{t("category.jet")}</h3>
          </Col>
        </Row>
      </Container>
      <br />
      <Container>
        <Row className="justify-content-between">
          <Col xs={7}>
            <div style={{ gap: "20px" }} className="big">
              <button className="btn1">{t("category.full")}</button>
              <button className="btn2">{t("category.from")}</button>
              <button className="btn3">BRP</button>
              <button className="btn4">{t("category.more")}</button>
            </div>
          </Col>
          <Col xs={4}>
            <div>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel
                  style={{ paddingLeft: "50px" }}
                  id="demo-multiple-name-label"
                >
                  {t("category.popularity")}
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
      <div className="container">
        <div className="roe">
          <div className="col-4">
            <input
              className="get"
              type="text"
              onChange={(e) => setGetValue(e.target.value)}
              placeholder="search"
            />
          </div>
        </div>
      </div>
      <div className="sectioncategory">
        <Container>
          <Row className="mb-5 mt-5">
            {slice
              .filter((item) => {
                return getValue.toLocaleLowerCase() === ""
                  ? item
                  : item.name.toLowerCase() && item.product.toLowerCase().includes(getValue);
              })
              .map((item) => {
                return (
                  <>
                    <Col xs={4} className="mb-2" key={item?.id}>
                      <Card
                        className="cartCategory"
                        style={{
                          width: "25rem",
                          textAlign: "center",
                          position: "relative",
                        }}
                      >
                        <i className="fa-regular fa-heart heart1"></i>
                        <Card.Img
                          variant="top"
                          src={item?.img}
                          alt=""
                          className="img1"
                        />
                        <Card.Body>
                          <Card.Title
                            style={{ fontSize: "18px", fontWeight: "300" }}
                            className="titlecategory"
                          >
                            {item?.name}
                          </Card.Title>
                          <Card.Text
                            style={{ fontSize: "30px", fontWeight: "700" }}
                            className="price1"
                          >
                            {item?.price}
                            {item?.net}
                            <h1>{item?.product}</h1>
                            <h4>{item?.message}</h4>
                          </Card.Text>
                        </Card.Body>
                        <Card.Body>
                          <i
                            style={{ position: "absolute" }}
                            className="fa-solid fa-cart-shopping bucket"
                          ></i>
                        </Card.Body>
                      </Card>
                    </Col>
                  </>
                );
              })}
          </Row>
        </Container>

        <button
          onClick={() => loadMore()}
          className="btn btn-dark d-block w-100 mb-5"
        >
          {t("category.see")}
        </button>
      </div>
      <section className='foterb'>
        <Container>
          <Row>
            <Col xs={3}>
              <h5 className='holtib'>{t("category.footersearch")}</h5>
                <input placeholder={t("category.email")} type='text' className='footinb'/>
                <button className='butfotb'>{t("category.send")}</button>
            </Col>
            <Col xs={3}> 
              <ul className='list_itmftb'>
                <li id='infob'>{t("category.inform")} </li>
                <li className='listftb'>{t("category.company")} </li>
                <li className='listftb'>{t("category.contact")}</li>
                <li className='listftb'>{t("category.stock")} </li>
                <li className='listftb'>{t("category.shop")}</li>
              </ul>
            </Col>
            <Col xs={3}>
                <ul className='lasftbmag'>
                    <li id='mgagash'>{t("category.online")}</li>
                    <li className='mgshopb'>{t("category.delivery")}</li>
                    <li className='mgshopb'>{t("category.pay")}</li>
                    <li className='mgshopb'>{t("category.return")}</li>
                    <li className='mgshopb'>{t("category.news")}</li>
                </ul>
            </Col>
            <Col >
                <div className='iconsfoterb'>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-telegram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-youtube"></i>
                </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Bnavbar;
