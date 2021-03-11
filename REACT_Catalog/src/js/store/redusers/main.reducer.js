const initialState = {
    dbAddress:"http://192.168.100.4:3000",
}

export const mainReducer = (state= initialState, action) =>{
    switch(action.type){
        default:{
            return state;
        }
    }
}