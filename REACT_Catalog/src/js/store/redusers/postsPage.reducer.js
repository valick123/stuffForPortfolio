const initialState = {
    posts:[],
    postsImgs:[],
    postPageInfo:null,
    postPageImg:null,
    postPageComments:[],
}
export  const postsPageReducer = (state = initialState, action)=>{
    switch(action.type){
        case "GET_POSTS":{
            return {
                ...state,
                posts:[ ...action.payload]
            }
        }
        case "GET_POSTS_IMGS":{
            return{
                ...state,
                postsImgs:[ ...action.payload]
            }
        }
        case 'GET_POST_INFO':{
            return {
                ...state,
                postPageInfo:action.payload
            }
        }
        case 'GET_POST_IMG':{
            return {
                ...state,
                postPageImg:action.payload
            }
        }
        case 'GET_POST_COMMENTS':{
            return {
                ...state,
                postPageComments:[...action.payload]
            }
        }
        default:{
            return state;
        }
    }
}