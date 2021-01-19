const initialState= {
    posts:[],
    postsImgs:[],
    news:[],
    postPageInfo:null,
    newsPageInfo:null
}
export const homePageReducer =(state = initialState, action)=>{
    switch(action.type){
        case 'GET_POSTS':{
            return {    
                ...state,            
                posts:[...state.posts,...action.payload.filter((item)=>item.id>=6?false:true)]
            }
        }
        case 'GET_POSTS_IMGS':{
            return {
                ...state, 
                postsImgs:[...state.postsImgs,...action.payload.filter((item)=>item.id>=6?false:true)]
            }
        }
        case "GET_NEWS":{
            return{
                ...state,
                news:[...state.news,...action.payload.filter((item)=>item.id>=11?false:true)]
            }
        }
        case 'GET_POST_INFO':{
            return {
                ...state,
                postPageInfo:action.payload
            }
        }
        case "GET_NEWS_INFO":{
            return{
                ...state,
                newsPageInfo:action.payload
            }
        }
        default: {
            return state
        }
    }
}