export const actionType = {
    SUBMIT_WEBSITE_DATA: "Submit Website Data",
    GET_EXISTING_DATA: "Get Existing Data",
    UPDATE_EXISTING_DATA: "Update Existing Data"
}

export const actions = {
    submitWebsiteData(payload) {
        return {
            type: actionType.SUBMIT_WEBSITE_DATA,
            payload
        };
    },
    getExistingData(payload){
        return {
            type: actionType.GET_EXISTING_DATA,
            payload
        };
    },
    updateExistingData(payload)
    {
        return {
            type: actionType.UPDATE_EXISTING_DATA,
            payload
        };
    }
}

export function SubmitWebsiteDataReducer(state, action)
{
    switch(action.type)
    {
        case actionType.UPDATE_EXISTING_DATA:
            return{
                ...state,
                ...payload
            }
        default:
            return state;
    }
}