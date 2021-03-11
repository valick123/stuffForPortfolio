const initialState = {
    catalogList:{},
    currentProduct:{}
}
export const catalogReducer = (state = initialState,action)=>{
    switch (action.type){
        case "GET_PRODUCT_LIST":{
            let categiryList= [];
            action.payload.forEach(item => {
                if(!categiryList.includes(item.productType)){
                    categiryList.push(item.productType);
                }
            });
            let newCatalogList = {};
            categiryList.forEach(category=>{
                newCatalogList[category] = action.payload.filter(item=>category===item.productType?true:false)
            }) 
            return{
                ...state,
                catalogList:newCatalogList
            }
        }
        case "GET_CURRENT_PRODUCT":{
            let currentProduct = action.payload.data.filter(item=>item.title === action.payload.currentProduct?true:false)[0];
            return{
                ...state,
                currentProduct:currentProduct
            }
        }
        default:{
            return state
        }
    }
}