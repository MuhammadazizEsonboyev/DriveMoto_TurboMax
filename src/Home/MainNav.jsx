import React from "react";
import { Col, Container, NavDropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import logo from "././Nav/image/лого.svg";
import './Nav/NavbarPage.css'
import {products} from "../_utils/Constants"

export default function MainNav({ size }) {
  const { t } = useTranslation()

  const handleClick = (value) => {
    i18next.changeLanguage(value)
  }

  

  return (
    <div className="">
      <Container>
        <Row>

          <div className="">
            <nav className="" >
              <div className="'hidden ml-4">
                <div className="flex gap-[15px]">
                  <div className='mt-4 flex '>
                    <div className="sm:hidden ">
                      <div className="flex">
                        <div className="dropdown">
                          <button className="dropbtn ">
                            <MenuIcon className='hidden mr-12 ' />
                          </button>
                          <div className="dropdown-content">
                            <a href="*"><PersonIcon />   Войти</a>
                            <a href="*"><LocationOnIcon />  Регистрация</a>
                            <a href="*"><FavoriteBorderIcon />  Избранное</a>
                            <a href="*"><ShoppingCartIcon />  Корзина</a>
                            <a href="#action/3.1" onClick={() => handleClick("ru")}>Russian</a>
                            <a href="#action/3.2" onClick={() => handleClick("uzb")}>Uzbek</a>
                            <a href="#action/3.3" onClick={() => handleClick("eng")}> English</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" gap-[99px] hidden sm:flex">
                            <NavDropdown title={t("text.choose")} className="text-[20px] font-[700]" style={{ color: "black" }} id="collasible-nav-dropdown">
                              <NavDropdown.Item href="#action/3.1" onClick={() => handleClick("ru")}>Russian</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.2" onClick={() => handleClick("uzb")}> Uzbek</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.3" onClick={() => handleClick("eng")}>English</NavDropdown.Item>
                            </NavDropdown>
                      <h4 className="text-[20px] font-[700]">Акции</h4>
                      <h4 className="text-[20px] font-[700]">Доставка и оплата</h4>
                    </div>
                    <div className="flex mt-2 sm:hidden">
                      <p className='text-[15px]'>DRIVE-</p>
                      <p className='text-[15px]'> MOTO</p>
                    </div>
                  </div>
                  <div className='sm:flex hidden gap-32 '>
                    <div className='ml-[165px]'>
                      <img src={logo} alt="svg" id="logo" />
                    </div>
                    <div className="flex gap-3  mt-[28px]">
                      <LocationOnIcon />
                      <h5 className='text-[20px] font-[700]'>Москва,  ул. Науки  25</h5>
                    </div>
                  </div>
                  <div className='ml-7'>
                    <div className='flex'>
                      <div className="flex ml-[0px] mt-[35px] sm:mt-[27px]">
                        <FavoriteBorderIcon className='ml-0 hover:text-[#f44336]' />
                        <PersonIcon className='ml-1 hover:text-[#f44336]' />
                        <Link to="/cart">
                          <ShoppingCartIcon className='ml-1 hover:text-[#f44336]' />
                          <span className="absolute ml-[-7px]  mt-[-8px]">{size}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </nav>
            <div id="nav-category-box">
              <Col xs={6} lg={12} className='d-block d-sm-block mt-2' >
                <div id="category-box">
                  {products.map((item,i) => {
                    return (
                      <Link key={i} id="category-link" to={item.to}>
                        <button id="category-name">{t(item.name)}</button>
                      </Link>
                    );
                  })}
                </div>
              </Col>
            </div>
          </div>

        </Row>
      </Container>
    </div>
  );
}
