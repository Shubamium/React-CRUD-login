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
            return {
                username: action.data.username,
                isAuthenticated:true,
                userId: action.data.userId
            };
        case USER_ACTION.LOGOUT:
            return baseLogin;
        default:
            return state;
    }
}