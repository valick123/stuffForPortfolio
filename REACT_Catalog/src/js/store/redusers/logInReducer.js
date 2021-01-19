const initialState = {
    isLoged: false,
    userName: "Admin",
    password:'12345'
}
export const logInReducer = (state = initialState, action) =>{
    switch(action.type) {
        case "LOG_IN" : {
            return {
                isLoged : action.payload
            }
        }
        case "LOG_OUT" :{
            return{
                isLoged: action.payload
            }
        }
        default : {
            return state
        }
    }
}