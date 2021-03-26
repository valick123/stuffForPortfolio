import '../scss/main.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import 'slick-carousel/slick/fonts/slick.eot'

import React from 'react';
import {render} from 'react-dom';
import App from './components/app.js'
import {Provider} from 'react-redux';
import {store} from './store/store'

 render(
 <Provider store={store}>
     <App />
 </Provider>, 
    document.querySelector('body'));
