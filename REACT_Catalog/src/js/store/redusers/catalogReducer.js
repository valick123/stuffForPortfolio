const initialState = {
    catalogList:[],
    currentProduct:{}
}
export const catalogReducer = (state = initialState,action)=>{
    switch (action.type){
        case "GET_PRODUCT_LIST":{
            return{
                ...state,
                catalogList:[ ...action.payload]
            }
        }
        case "GET_CURRENT_PRODUCT":{
            return{
                ...state,
                currentProduct:action.payload[0]
            }
        }
        default:{
            return state
        }
    }
}