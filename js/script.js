import initMenuMobile from './modules/menuMobile.js';
import { initAnimacaoScroll } from './modules/scroll.js';
import {SlideNav} from "./modules/slide.js";
import getActivePage from './modules/getActivePage.js';
import changeQuote from './modules/changeQuote.js';

const slide = new SlideNav ('.slide', '.wrapper')

const hostel = document.querySelector("#hostel-services")
const camping = document.querySelector('#camping')
const eventos = document.querySelector('#eventos')

if (hostel || camping || eventos){
    console.log('iniciou po')
    slide.init()
    slide.onResize(true)
    slide.addControl('.custom-control')
    slide.addTimeChange(10000)
}

initMenuMobile()
initAnimacaoScroll()
getActivePage()
changeQuote(10000)