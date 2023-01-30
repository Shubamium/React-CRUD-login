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
            const data = {
                username: action.data.username,
                isAuthenticated:true,
                userId: action.data.userId
            };
            localStorage.setItem('userdata',JSON.stringify(data));
            return data;

        case USER_ACTION.LOGOUT:
            const dataString = JSON.stringify(baseLogin);
            localStorage.setItem('userdata',dataString);

            return baseLogin;

        default:
            return state;
    }
}