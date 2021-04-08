const initialState = {
    news:[],
    newsPageInfo:null
}

export const newsPageReducer = (state = initialState, action) =>{
    switch(action.type){
        case "GET_NEWS":{
            return{
                ...state,
                news:[...action.payload]
            }
        }
        case "GET_NEWS_INFO":{
            return{
                ...state,
                newsPageInfo:action.payload
            }
        }
        default:{
            return state
        }
    }
}