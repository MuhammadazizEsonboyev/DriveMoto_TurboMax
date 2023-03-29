import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalNav from "././Nav/Modal";
import logo from "././Nav/image/лого.svg";
import navigation from "././Nav/image/navigation.svg";
import Like from "././Nav/image/Like.svg";
import Card from "././Nav/image/Card.svg";
import { products } from "././Nav/DataName";

export default function MainNav() {
  return (
    <div>
      <nav id="nav-asad">
        <Container>
          <Row className="justify-content-center">
            <Col xs={5}>
              <div id="Navbar-box">
                <h4 id="nav-market">Магазины</h4>
                <h4 id="nav-market">Акции</h4>
                <h4 id="nav-market">Доставка и оплата</h4>
              </div>
            </Col>
            <Col xs={2}>
              <div id="image">
                <img src={logo} alt="svg" id="logo" />
              </div>
            </Col>
            <Col xs={5}>
              <div id="Navbar-box">
                <img src={navigation} alt="svg" id="navigation-img" />
                <h4 id="nav-adress">Москва, ул. Науки 25</h4>
                <div id="profile-box">
                  <img src={Like} alt="" />
                  <ModalNav />
                  <img src={Card} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </nav>

      <div id="nav-category-box">
        <Container>
          <Row>
            <Col xs={12}>
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
