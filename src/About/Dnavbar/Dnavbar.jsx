import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BarChartIcon from '@mui/icons-material/BarChart';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import qayq from '../img/qayiq.png'
import '../Dnavbar/Dnavbar.css'
import { useTranslation } from 'react-i18next';

const Dnavbar = () => {
    const { t } = useTranslation()
    return (
        
                        <div className='sm:flex'>
            <div className="container mx-auto px-8">
                <container className='mr-7  ml-[70px]'>
                    <div className='flex '>
                        <div className='sm:flex  '>
                            <div className='truncate '>
                                <p className='text-[17px] w-min text-center font-[400] text-[#C4C4C4] hidden sm:flex '>Главная
                                    Гидроциклы
                                    Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic
                                </p>
                                <button className='border-white h-[50px] w-[150px] bg-[#1C62CD] text-white rounded-sm mt-[40px] hidden sm:block'>SALE</button>
                                <p className=' flex sm:hidden text-[17px] w-full  text-center font-[400] text-[#C4C4C4] '>Главная
                                    Гидроциклы
                                    Гидроцикл BRP <br /> SeaDoo GTI 155hp SE <br /> Long Blue Metallic
                                </p>
                                <div className="sm:hidden  ">
                                    <h2 className='mb-[10px] mt-[29px] text-[20px] font-[700] w-[40%] text-center ml-[9px] '>Гидроцикл BRP SeaDoo GTI <br /> 155hp SE  Long Blue Metallic</h2>
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
                                <img className='sm:w-[580px] w-[260px] ' src={qayq} alt="" />
                                <div className="text-center ">
                                    <h2 className='mb-2 text-[20px] text-slate-300 line-through md:w-10 sm:ml-[220px] mr-[60px] '>1 200 475 ₽</h2>
                                    <h2 className='text-black ml-[-60px] font-[700] text-[30px]'>1 100 475 ₽</h2>
                                    <p className='ml-[-10px] w-[100%] text-center  '>Нашли дешевле? Снизим цену!</p>
                                </div>
                                <button className='border-white w-[310px] bg-[#1C62CD] text-white md:hidden  block rounded-sm mt-[29px] '>купить</button>
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
                                        <h6 className='mb-2'>{t("about.dostonbek_li1")}</h6>
                                        <div className=''></div>
                                        <h6 className='mb-2'>{t("about.dostonbek_li2")} </h6>
                                        <div className='chiziq'></div>
                                        <h6 className='mb-2'>{t("about.dostonbek_li3")}</h6>
                                        <div className='chiziq'></div>
                                        <h6 className='mb-2'>{t("about.dostonbek_li4")}</h6>
                                        <div className='chiziq'></div>
                                        <h6 className='mb-2'>{t("about.dostonbek_li5")}</h6>
                                        <div className='chiziq'></div>
                                        <h6 className=' mt-6  text-[blue] text-[18px] underline-offset-5'>{t("about.dostonbek_hover")}</h6>
                                    </div>
                                    <div className="stateAge">
                                        <h6 className='mb-2'>{t("about.dostonbek_li_1")}</h6>
                                        <h6 className='mb-2'>3 </h6>
                                        <h6 className='mb-2'>155</h6>
                                        <h6 className='mb-2'>{t("about.dostonbek_li_2")}</h6>
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