import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BarChartIcon from '@mui/icons-material/BarChart';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import PersonIcon from '@mui/icons-material/Person';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import MenuIcon from '@mui/icons-material/Menu';
import qayq from '../img/qayiq.png'
// import logo from '../img/logo.svg'
import '../Dnavbar/Dnavbar.css'

const products = [
    { name: "Квадроциклы", search: "Поиск по  номеру", to: "/home" },
    { name: "Катера", search: "Поиск по марке", to: "/category" },
    { name: "Гидроциклы", search: "Поиск по названию товара", to: "/about" },
    { name: "Лодки", search: "Поиск по рейтингу" },
    { name: "Вездеходы", search: "" },
    { name: "Снегоходы", search: "" },
    { name: "Двигатели", search: "" },
    { name: "Запчасти", search: "" },
]

const Dnavbar = () => {
    return (
        <div className='md:container md:mx-auto sm:truncate ' >
            {/* <div>
                <nav >
                    <div className="'hidden ml-4">
                        <div className="flex gap-[18px]">
                            <div className='mt-4 flex '>
                                <div className="sm:hidden ">
                                    <div className="flex">
                                        <div class="dropdown">
                                            <button class="dropbtn ">
                                                <MenuIcon className='hidden mr-12 ' />
                                            </button>
                                            <div class="dropdown-content">
                                                <a href="*"><PersonIcon />   Войти</a>
                                                <a href="*"><LocationOnIcon />  Регистрация</a>
                                                <a href="*"><FavoriteBorderIcon />  Избранное</a>
                                                <a href="*"><ShoppingCartIcon />  Корзина</a>
                                                <a href="*">rus</a>
                                                <a href="*">eng</a>
                                                <a href="*"> uzb</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" gap-[99px] hidden sm:flex">
                                    <h4 className="text-[20px] font-[700]">Магазины</h4>
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
                                    <div className="flex ml-[0px] mt-[25px]">
                                        <FavoriteBorderIcon className='ml-3 hover:text-[#f44336]' />
                                        <PersonIcon className='ml-3 hover:text-[#f44336]' />
                                        <ShoppingCartIcon className='ml-3 hover:text-[#f44336]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <div id="nav-category-box">
                    <div>
                        <div>
                            <div className='sm:flex gap-[90px] bg-slate-200 w-full h-11 mx-auto hover:uppercase mt-5  hidden '>
                                {products.map((item) => {
                                    return (
                                        <div className='flex justify-between'>
                                            <button className="hover:font-bold  ml-2">{item.name}</button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div id="container mx-auto px-4">
                <container className='mr-17  ml-[70px]'>
                    <div className='flex '>
                        <div className='sm:flex  '>
                            <div className='truncate '>
                                <p className='text-[17px] w-min text-center font-[400] text-[#C4C4C4] hidden sm:flex '>Главная
                                    Гидроциклы
                                    Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic
                                </p>
                                <button className='border-white h-[50px] w-[150px] bg-[#1C62CD] text-white rounded-sm mt-[40px] hidden sm:block'>SALE</button>
                                <p className=' flex sm:hidden text-[17px] w-full ml-[30px] text-center font-[400] text-[#C4C4C4] '>Главная
                                    Гидроциклы
                                    Гидроцикл BRP <br /> SeaDoo GTI 155hp SE <br /> Long Blue Metallic
                                </p>
                                <div className="sm:hidden  ">
                                    <h2 className='mb-[10px] mt-[29px] text-[20px] font-[700] w-[100%] text-center '>Гидроцикл BRP SeaDoo GTI 155hp SE <br /> Long Blue Metallic</h2>
                                    <p className=' mt-10 text-[#2F3035] opacity-50 ml-4 w-10/12  '>Код товара:   366666-2 </p>
                                    <div className="flex gap-4 mt-3 mb-6 ml-3">
                                        <FavoriteBorderIcon className='' />
                                        <BarChartIcon className='' />
                                        <div className="flex ">
                                            <  StarOutlineIcon className='start' />
                                            < StarOutlineIcon className='start' />
                                            < StarOutlineIcon className='start' />
                                            < StarOutlineIcon className='start' />
                                            < StarOutlineIcon className='start' />
                                        </div>
                                    </div>
                                </div>
                                <img className='sm:w-[580px] w-[360px] ' src={qayq} alt="" />
                                <div className="text-center ">
                                    <h2 className='mb-2  text-[20px] text-slate-300 line-through md:w-80 sm:ml-[70px] '>1 200 475 ₽</h2>
                                    <h2 className='text-black ml-[-60px] font-[700] text-[30px]'>1 100 475 ₽</h2>
                                    <p className=' sm:ml-[70px] w-80 text-center  '>Нашли дешевле? Снизим цену!</p>
                                </div>
                                <button className='border-white w-[340px] ml-5 bg-[#1C62CD] text-white md:hidden  block rounded-sm mt-[29px] '>купить</button>
                            </div>
                            <div className='hidden md:block sm:ml-[124px]'>
                                <h2 className='mb-[10px] mt-[75px] text-[30px] font-[700] '>Гидроцикл BRP SeaDoo GTI 155hp SE <br /> Long Blue Metallic</h2>
                                <p className=' text-[#2F3035] opacity-50'>Код товара:   366666-2 </p>
                                <div className="flex gap-4 mt-3 mb-6">
                                    <FavoriteBorderIcon className='' />
                                    <BarChartIcon className='' />
                                    <div className="flex">
                                        <  StarOutlineIcon className='start' />
                                        < StarOutlineIcon className='start' />
                                        < StarOutlineIcon className='start' />
                                        < StarOutlineIcon className='start' />
                                        < StarOutlineIcon className='start' />
                                    </div>
                                </div                                                                                                                                                                                                                                                                                                                                                                                                                                    >
                                <div className="flex gap-16">
                                    <h4 className='text-black text-[23px] font-[700]'>Характеристики</h4>
                                    <h4 className='text-[#2F3035] text-[23px] opacity-50 mb-4'>Наличие в магазине</h4>
                                </div>
                                <div className="flex gap-14">
                                    <div className="stateName">
                                        <h6 className='mb-2'>Производитель</h6>
                                        <div className=''></div>
                                        <h6 className='mb-2'>Количество мест, шт: </h6>
                                        <div className='chiziq'></div>
                                        <h6 className='mb-2'>Мощность, л.с.</h6>
                                        <div className='chiziq'></div>
                                        <h6 className='mb-2'>Тип двигателя</h6>
                                        <div className='chiziq'></div>
                                        <h6 className='mb-2'>Год выпуска</h6>
                                        <div className='chiziq'></div>
                                        <h6 className=' mt-6  text-[blue] text-[18px] underline-offset-5'>Показать еще</h6>
                                    </div>
                                    <div className="stateAge">
                                        <h6 className='mb-2'>Канада</h6>
                                        <h6 className='mb-2'>3 </h6>
                                        <h6 className='mb-2'>155</h6>
                                        <h6 className='mb-2'>Бензиновый</h6>
                                        <h6 className='mb-2'>  2018</h6>
                                    </div>
                                </div>
                                <button className='border-white bg-[#1C62CD] text-white sm:w-[174px] sm:h-[54px] rounded-sm mt-[59px]'>купить</button>
                            </div>
                        </div>
                    </div>
                </container>
            </div>
        </div >
    )
}
export default Dnavbar