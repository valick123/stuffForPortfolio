const initialState= {
    homePagePosts:[],
    homePagePostsImgs:[],
    homePageNews:[],
    
}
export const homePageReducer =(state = initialState, action)=>{
    switch(action.type){
        case 'GET_HOME_PAGE_POSTS':{
            return {    
                ...state,            
                homePagePosts:[...state.homePagePosts,...action.payload.filter(item=>item.id<=6?true:false)]
            }
        }
        case 'GET_HOME_PAGE_POSTS_IMGS':{
            return {
                ...state, 
                homePagePostsImgs:[...state.homePagePostsImgs,...action.payload.filter(item=>item.id<=6?true:false)]
            }
        }
        case "GET_HOME_PAGE_NEWS":{
            return{
                ...state,
                homePageNews:[...state.homePageNews,...action.payload.filter((item)=>item.id<=11?true:false)]
            }
        }
        
        
        default: {
            return state
        }
    }
}