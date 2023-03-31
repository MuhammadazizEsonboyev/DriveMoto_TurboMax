import React from "react";
import { Col, Container, NavDropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalNav from "././Nav/Modal";
import logo from "././Nav/image/лого.svg";
import navigation from "././Nav/image/navigation.svg";
import Like from "././Nav/image/Like.svg";
import Card from "././Nav/image/Card.svg";
// import { products } from "././Nav/DataName";
import './Nav/NavbarPage.css'
import i18next from "i18next";
import { useTranslation } from "react-i18next";


export default function MainNav({size}) {
  const { t } = useTranslation()

  const handleClick = (value) => {
    i18next.changeLanguage(value)
  }


  const products = [
    { name: `${t("text.QuadBike")}`, search: "Поиск по  номеру", },
    { name: `${t("text.Katera")}`, search: "Поиск по марке", to: "/category" },
    { name: `${t("text.Hydrocyclically")}`, search: "Поиск по названию товара", to: "/about" },
    { name: `${t("text.Lodki")}`, search: "Поиск по рейтингу", to: "/home" },
    { name: `${t("text.Vezdexhody")}`, search: "" },
    { name: `${t("text.Snegohody")}`, search: "" },
    { name: `${t("text.Engine")}`, search: "" },
    { name: `${t("text.SpareParts")}`, search: "" },
  ]
  return (
    <div>
      <nav id="nav-asad">
        <Container>
          <Row className="justify-content-center">
            <Col xs={5} lg={5} className='d-none d-sm-block'>
              <div id="Navbar-box">
                <h4 id="nav-market">
                  <NavDropdown title={t("text.choose")} style={{ color: "black" }} id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1" onClick={() => handleClick("ru")}>Russian</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" onClick={() => handleClick("uzb")}> Uzbek</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" onClick={() => handleClick("eng")}>English</NavDropdown.Item>
                </NavDropdown>
                </h4>
                <h4 id="nav-market">{t("text.Stock")}</h4>
                <h4 id="nav-market">{t("text.Delivery")}</h4>

              </div>
            </Col>
            <Col xs={2} className='d-none d-sm-block'>
              <div id="image">
                <img src={logo} alt="svg" id="logo" />
              </div>
            </Col>
            <Col xs={5} className='d-none d-sm-block'>
              <div id="Navbar-box">
                <img src={navigation} alt="svg" id="navigation-img" />
                <h4 id="nav-adress">Москва, ул. Науки 25</h4>
                <div id="profile-box">
                  <img src={Like} alt="" />
                  <ModalNav />
                  <Link to="/cart">
                    <img src={Card} alt="" />
                    <span>{size}</span>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </nav>



      <div id="nav-category-box">
        <Container>
          <Row>
            <Col xs={6} lg={12} className='d-block d-sm-block' >
              <div id="category-box">
                {products.map((item) => {
                  return (
                    <Link id="category-link" to={item.to}>
                      <button id="category-name">{item.name}</button>
                    </Link>
                  );
                })}
              </div>
            </Col>


          </Row>
        </Container>
      </div>
    </div>
  );
}
