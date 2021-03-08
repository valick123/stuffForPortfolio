import '../scss/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import{render} from 'react-dom'
import Favicon from 'react-favicon';
import 'fontsource-roboto';
import {AppComponent} from "./components/app.component"
import { Favico } from './images';

 render(
     <>
        <Favicon url={Favico} />
        <AppComponent />
     </>
     ,
    document.querySelector('.app'));