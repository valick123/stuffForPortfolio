const initialState = {
   bascetList:[]
}

export const bascetReducer =(state = initialState, action)=>{
    switch(action.type){
        case "ADD_TO_BASCET":{
            return{
                ...state,
                bascetList:[action.payload,...state.bascetList]
            }
        }
        case "DELETE_FROM_BASCET":{
            return{
                ...state,
                bascetList:[...state.bascetList.filter((item)=>item.id == action.payload?false:true)]
            }
        }
        case "GET_DEFAULT_ITEMS":{
            return{
                ...state,
                bascetList:[...state.bascetList,...action.payload]
            }
        }
        default: {
            return state
        }
    }
}