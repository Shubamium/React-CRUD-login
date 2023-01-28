export const USER_ACTION = {
    LOGIN:'login',
    LOGOUT:'logout' 
}


export default function userReducer(state,action){
    const baseLogin = {
        username:'',
        isAuthenticated:false,
        userId:''
    };

    switch(action.type){
        case USER_ACTION.LOGIN:
            return state;
        case USER_ACTION.LOGOUT:
            return baseLogin;
        default:
            return state;
    }
}