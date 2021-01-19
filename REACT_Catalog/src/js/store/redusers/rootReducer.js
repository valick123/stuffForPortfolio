import {combineReducers} from 'redux';
import {bascetReducer} from './bascetReducer'
import {homePageReducer} from './homePageReducer'
import {catalogReducer} from './catalogReducer'
import {logInReducer} from './logInReducer'

export const rootReducer = combineReducers({
   homePage:homePageReducer,
   bascetPage:bascetReducer,
   catalogPage:catalogReducer,
   logInStatus:logInReducer
})