const initialState = {
    username: ""    
}

export const actionType = {
    SET_USERNAME: "[Main Component] Set Username",
    GET_USER_WEBSITE_DATA: "[Main Component] Get User Website Data",
    SET_USER_WEBSITE_DATA: "[Main Component] Set User Website Data"
}

export const actions = {
    setusername(payload)
    {
        return {
            type: actionType.SET_USERNAME,
            payload
        };
    },
    getUserWebsiteData(payload)
    {
        console.log("IN action");
        return {
            type: actionType.GET_USER_WEBSITE_DATA,
            payload
        }; 
    },
    setUserWebsiteData(payload)
    {
        return {
            type: actionType.SET_USER_WEBSITE_DATA,
            payload
        }; 
    }
}

export function mainReducer(state = initialState, action)
{
    switch(action.type)
    {
        case actionType.SET_USERNAME:
            console.log("ACTION", action);
            return {
                ...state,
                username: action.payload.username
            };
        case actionType.SET_USER_WEBSITE_DATA:
            console.log("SET_USER_WEBSITE_DATA", action.payload);
            return {
                ...state,
                ...action.payload
            }
        default:
            return {...state};
    }
}

