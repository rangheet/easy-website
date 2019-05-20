export const actionType = {
    SUBMIT_WEBSITE_DATA: "Submit Website Data"
}

export const actions = {
    submitWebsiteData(payload) {
        return {
            type: actionType.SUBMIT_WEBSITE_DATA,
            payload
        };
    }
}

export function SubmitWebsiteDataReducer(state, action)
{
    switch(action.type)
    {
        default:
            return state;
    }
}